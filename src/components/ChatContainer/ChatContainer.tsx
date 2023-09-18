import { useState } from 'react';

import { View } from 'react-native';

import MessageList from '../MessageList/MessageList';
import MessageForm from '../MessageForm/MessageForm';
import Drawer from '../Drawer/Drawer';
import DrawerChatContent from '../DrawerChatContent/DrawerChatContent';

import type { IMessage } from '../../types';

import styles from './ChatContainer.styles';

const ChatContainer = () => {
  const [messagesList, setMessagesList] = useState<IMessage[]>([]);

  return (
    <View style={styles.container}>
      <Drawer position="right" content={DrawerChatContent}>
        <MessageList messagesList={messagesList} setMessagesList={setMessagesList} />
        <MessageForm setMessagesList={setMessagesList} />
      </Drawer>
    </View>
  );
};

export default ChatContainer;
