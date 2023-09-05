import { useState } from "react";
import { FlatList, View } from "react-native";
import { Text } from "react-native-paper";
import MessageForm from "./MessageForm";
import Message from "./Message";
import { StyleSheet } from "react-native";
import { IMessage } from "../types";

const MessageListContainer = () => {
  const [messagesList, setMessagesList] = useState<IMessage[]>([]);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: "#e0e0e0", flex: 12 }}>
        {messagesList.length > 0 ? (
          <FlatList data={messagesList} renderItem={({ item }) => <Message data={item} />} keyExtractor={(item) => item.id} />
        ) : (
          <Text variant="headlineMedium" style={{ padding: 20, textAlign: "center" }}>
            No hay mensajes
          </Text>
        )}
      </View>
      <MessageForm setMessagesList={setMessagesList} />
    </View>
  );
};

export default MessageListContainer;
