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
    <View style={styles.container}>
      <View style={styles.listContainer}>
        {messagesList.length > 0 ? (
          <FlatList data={messagesList} renderItem={({ item }) => <Message data={item} />} keyExtractor={(item) => item.id} />
        ) : (
          <Text variant="headlineMedium" style={styles.textAlert}>
            No hay mensajes
          </Text>
        )}
      </View>
      <MessageForm setMessagesList={setMessagesList} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listContainer: {
    backgroundColor: "#e0e0e0",
    flex: 12
  },
  textAlert: {
    padding: 20, 
    textAlign: "center",
  }
});

export default MessageListContainer;
