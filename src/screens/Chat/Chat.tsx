import { useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { randomUUID } from 'expo-crypto';
import socket from '../../services/socket';

import { View } from 'react-native';
import { Drawer } from '../../components';
import { DrawerChatContent, MessageForm, MessageList } from './components';

import { getRoom, sendMessage } from '../../api/routes/roomsRoutes';

import { globalStyles } from '../../../global.styles';

import type { IMessage, IRoom, IUser, MessageBody } from '../../types';
import type { IRootState } from '../../store';

const Chat = () => {
  const params = useRoute().params as { roomId: string };
  const queryClient = useQueryClient();
  const user = useSelector<IRootState>(state => state.auth.user);

  const queryKey = ['roomList', { room: params.roomId }];

  const query = useQuery({ queryKey, queryFn: () => getRoom(params.roomId) });

  const mutation = useMutation({
    mutationFn: sendMessage,
    onMutate: async variables => {
      await queryClient.cancelQueries({ queryKey });

      const optimisticMessage = { ...variables.message, user: user as IUser };

      queryClient.setQueryData<IRoom>(queryKey, old => {
        if (!old) {
          return old;
        }

        return { ...old, messages: [...old.messages!, optimisticMessage] };
      });

      socket.emit('sendMessage', { id: variables.id, message: optimisticMessage });

      return { optimisticMessage };
    },
    onError: (error, variables, context) => {
      queryClient.setQueryData<IRoom>(queryKey, old => {
        if (!old) {
          return old;
        }

        const newMessages = old.messages!.filter(message => message.id !== context?.optimisticMessage.id);

        return { ...old, messages: newMessages };
      });
    },
    onSuccess: (result, variables, context) => {
      queryClient.setQueryData<IRoom>(queryKey, old => {
        if (!old) {
          return old;
        }

        const newMessages = old.messages!.map(message => (message.id === context?.optimisticMessage.id ? result! : message));

        return {
          ...old,
          messages: newMessages
        };
      });
    }
  });

  const handleReceiveMessage = async (data: { id: string; message: IMessage }) => {
    await queryClient.cancelQueries({ queryKey });

    queryClient.setQueryData<IRoom>(queryKey, old => {
      if (!old) {
        return old;
      }

      return { ...old, messages: [...old.messages!, data.message] };
    });
  };

  const handleSubmit = (values: { message: string }) => {
    const newMessage: MessageBody = {
      id: randomUUID(),
      user: (user as IUser).id,
      text: values.message,
      date: new Date()
    };

    mutation.mutateAsync({ id: params.roomId, message: newMessage });
  };

  useEffect(() => {
    socket.on('updateMessages', handleReceiveMessage);

    return () => {
      socket.off('updateMessages');
    };
  }, []);

  return (
    <View style={globalStyles.container}>
      <Drawer position="right" content={<DrawerChatContent room={query.data!} />}>
        <MessageList messagesList={query.data?.messages} />
        <MessageForm handleSubmit={handleSubmit} />
      </Drawer>
    </View>
  );
};

export default Chat;
