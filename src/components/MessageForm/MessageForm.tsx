import { useState } from 'react';
import { randomUUID } from 'expo-crypto';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { sendMessage } from '../../api/routes/roomsRoutes';

import { View } from 'react-native';
import { TextInput, ToggleButton } from 'react-native-paper';

import type { IUser, MessageBody } from '../../types';
import type { IRootState } from '../../store';

import styles from './MessageForm.styles';
import colors from '../../constants/colors';
import { useSelector } from 'react-redux';

interface MessageFormProps {
  roomId: string;
}

const MessageForm = ({ roomId }: MessageFormProps) => {
  const [inputValue, setInputValue] = useState('');

  const queryClient = useQueryClient();

  const user = useSelector<IRootState>(state => state.auth.user);

  const mutation = useMutation({
    mutationFn: sendMessage,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['roomsList', { room: roomId }] });
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
