import { useState } from "react";
import { FlatList, View } from "react-native";
import { Text } from "react-native-paper";

import MessageForm from "../MessageForm/MessageForm";
import Message from "../Message/Message";

import { IMessage } from "../../types";

import styles from "./MessageListContainer.styles";

const MessageListContainer = () => {
  const [messagesList, setMessagesList] = useState<IMessage[]>([]);

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        {messagesList.length > 0 ? (
          <FlatList data={messagesList} renderItem={({ item }) => <Message data={item} setMessagesList={setMessagesList} />} keyExtractor={(item) => item.id} />
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

export default MessageListContainer;
