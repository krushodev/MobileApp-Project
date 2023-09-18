import { useState } from 'react';
import { FlatList, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import MessageForm from '../MessageForm/MessageForm';
import Message from '../Message/Message';

import type { IMessage } from '../../types';

import styles from './MessageListContainer.styles';
import { Drawer } from 'react-native-drawer-layout';

const MessageListContainer = () => {
  const [messagesList, setMessagesList] = useState<IMessage[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer
      open={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      drawerPosition="right"
      renderDrawerContent={() => {
        return <Text>Drawer content</Text>;
      }}
    >
      <View style={styles.container}>
        <View style={styles.listContainer}>
          {messagesList.length > 0 ? (
            <FlatList
              data={messagesList}
              renderItem={({ item }) => <Message data={item} setMessagesList={setMessagesList} />}
              keyExtractor={item => item.id}
            />
          ) : (
            <Text variant="headlineMedium" style={styles.textAlert}>
              No hay mensajes
            </Text>
          )}
        </View>
        {}
        <MessageForm setMessagesList={setMessagesList} />
      </View>
    </Drawer>
  );
};

export default MessageListContainer;
