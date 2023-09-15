import { useState } from "react";
import { randomUUID } from "expo-crypto";
import { View, GestureResponderEvent } from "react-native";
import { TextInput, ToggleButton } from "react-native-paper";

import { IMessage } from "../../types";

import styles from "./MessageForm.styles";

interface MessageFormProps {
  setMessagesList: React.Dispatch<React.SetStateAction<IMessage[]>>;
}

const MessageForm = ({ setMessagesList }: MessageFormProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleClick: ((event: GestureResponderEvent | string | undefined) => void) | undefined = (e) => {
    const newMessage = {
      id: randomUUID(),
      user: {
        name: "User",
        image: `https://picsum.photos/2${Math.round(Math.random() * 100)}`,
      },
      text: inputValue,
      date: new Date(),
    };

    setMessagesList((prev) => [...prev, newMessage]);
    setInputValue("");
  };

  return (
    <View style={styles.container}>
      <TextInput onChangeText={setInputValue} mode="outlined" outlineStyle={styles.input} cursorColor={styles.input.color} value={inputValue} style={styles.input} />
      <ToggleButton onPress={handleClick} disabled={inputValue ? false : true} size={35} icon="send" iconColor="#8780b0" />
    </View>
  );
};

export default MessageForm;
