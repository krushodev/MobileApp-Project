import { useState } from 'react';
import { randomUUID } from 'expo-crypto';
import { View } from 'react-native';
import { TextInput, ToggleButton } from 'react-native-paper';

import type { IMessage } from '../../types';
import type { GestureResponderEvent } from 'react-native';

import styles from './MessageForm.styles';
import colors from '../../constants/colors';

interface MessageFormProps {
  setMessagesList: React.Dispatch<React.SetStateAction<IMessage[]>>;
}

const MessageForm = ({ setMessagesList }: MessageFormProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleClick: ((event: GestureResponderEvent | string | undefined) => void) | undefined = e => {
    const newMessage = {
      id: randomUUID(),
      user: {
        name: 'User',
        image: `https://picsum.photos/2${Math.round(Math.random() * 100)}`
      },
      text: inputValue,
      date: new Date()
    };

    setMessagesList(prev => [...prev, newMessage]);
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
