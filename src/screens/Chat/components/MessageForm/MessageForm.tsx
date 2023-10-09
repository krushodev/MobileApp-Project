import { useState } from 'react';
import { useSelector } from 'react-redux';
import { randomUUID } from 'expo-crypto';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import socket from '../../../../api/socket';

import { View } from 'react-native';
import { TextInput, ToggleButton } from 'react-native-paper';

import { sendMessage } from '../../../../api/routes/roomsRoutes';

import styles from './MessageForm.styles';
import colors from '../../../../constants/colors';

import type { IUser, MessageBody } from '../../../../types';
import type { IRootState } from '../../../../store';

interface MessageFormProps {
  roomId: string;
}

const MessageForm = ({ roomId }: MessageFormProps) => {
  const [inputValue, setInputValue] = useState('');

  const queryClient = useQueryClient();

  const user = useSelector<IRootState>(state => state.auth.user);

  const mutation = useMutation({
    mutationFn: sendMessage,
    onMutate: variables => {
      socket.emit('sendMessage', variables);
    },
    onSuccess: async variables => {
      await queryClient.refetchQueries({ queryKey: ['roomsList', { room: roomId }] });
    }
  });

  const handleClick = () => {
    const newMessage: MessageBody = {
      id: randomUUID(),
      user: (user as IUser).id,
      text: inputValue,
      date: new Date()
    };

    mutation.mutateAsync({ id: roomId!, message: newMessage });

    setInputValue('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={setInputValue}
        mode="outlined"
        outlineStyle={styles.input}
        cursorColor={styles.input.color}
        value={inputValue}
        style={styles.input}
      />
      <ToggleButton onPress={handleClick} disabled={inputValue === ''} size={35} icon="send" iconColor={colors.primary} />
    </View>
  );
};

export default MessageForm;
