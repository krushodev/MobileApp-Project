import { useState } from "react";
import { View, GestureResponderEvent, StyleSheet } from "react-native";
import { TextInput, Button, ToggleButton } from "react-native-paper";
import { IMessage } from "../types";
import { randomUUID } from "expo-crypto";

const MessageForm = ({ setMessagesList }: { setMessagesList: React.Dispatch<React.SetStateAction<IMessage[]>> }) => {
  const [inputValue, setInputValue] = useState("");

  const handleClick: ((event: GestureResponderEvent | string | undefined) => void) | undefined = (e) => {
    const newMessage = {
      id: randomUUID(),
      user: {
        name: "Nacho",
        image: "https://picsum.photos/200",
      },
      text: inputValue,
      date: new Date(),
    };

    setMessagesList((prev) => [...prev, newMessage]);
    setInputValue("");
  };

  return (
    <View style={styles.container}>
      <TextInput onChangeText={setInputValue} value={inputValue} style={styles.input} />
      <ToggleButton onPress={handleClick} disabled={inputValue ? false : true} size={30} icon="send" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  input: {
    flex: 1,
  },
});

export default MessageForm;
