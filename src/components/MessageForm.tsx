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
      <TextInput onChangeText={setInputValue} mode="outlined" outlineStyle={styles.input} cursorColor={styles.input.color} value={inputValue} style={styles.input}/>
      <ToggleButton onPress={handleClick} disabled={inputValue ? false : true} size={35} icon="send" iconColor="#8780b0" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#e5e5e5",
  },
  input: {
    flex: 1,
    color: "#8780b0",
    borderRadius: 15,
    paddingVertical: 5, 
    borderColor: "#8780b0",
  }
});

export default MessageForm;
