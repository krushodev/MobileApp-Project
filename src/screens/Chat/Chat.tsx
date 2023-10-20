import { useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { randomUUID } from 'expo-crypto';
import socket from '../../services/socket';

import { View } from 'react-native';
import { Drawer } from '../../components';
import { DrawerChatContent, MessageForm, MessageList } from './components';

import { getRoom, sendMessage } from '../../api/routes/roomsRoutes';

import styles from './Chat.styles';

import type { IUser, MessageBody } from '../../types';
import type { IRootState } from '../../store';

const Chat = () => {
  const params = useRoute().params as { roomId: string };
  const queryClient = useQueryClient();
  const user = useSelector<IRootState>(state => state.auth.user);

  const query = useQuery({ queryKey: ['roomsList', { room: params.roomId }], queryFn: () => getRoom(params.roomId) });

  socket.on('receiveMessages', async data => {
    await queryClient.refetchQueries({ queryKey: ['roomsList', { room: data.id }] });
  });

  const mutation = useMutation({
    mutationFn: sendMessage,
    onMutate: variables => {
      socket.emit('sendMessage', variables);
    },
    onSuccess: async () => {
      await queryClient.refetchQueries({ queryKey: ['roomsList', { room: params.roomId }] });
    }
  });

  const handleSubmit = (values: { message: string }) => {
    const newMessage: MessageBody = {
      id: randomUUID(),
      user: (user as IUser).id,
      text: values.message,
      date: new Date()
    };

    mutation.mutateAsync({ id: params.roomId, message: newMessage });
  };

  return (
    <View style={styles.container}>
      <Drawer position="right" content={<DrawerChatContent room={query.data} />}>
        <MessageList messagesList={query.data?.messages} />
        <MessageForm handleSubmit={handleSubmit} />
      </Drawer>
    </View>
  );
};

export default Chat;
