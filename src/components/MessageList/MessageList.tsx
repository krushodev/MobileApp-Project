import { FlatList, View } from 'react-native';
import { Text } from 'react-native-paper';

import Message from '../Message/Message';

import { IMessage } from '../../types';

import styles from './MessageList.styles';

interface MessageListProps {
  messagesList: IMessage[] | undefined;
}

const MessageList = ({ messagesList }: MessageListProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        {messagesList && messagesList.length > 0 ? (
          <FlatList data={messagesList} renderItem={({ item }) => <Message data={item} />} keyExtractor={item => item.id} />
        ) : (
          <Text variant="headlineMedium" style={styles.textAlert}>
            No hay mensajes
          </Text>
        )}
      </View>
    </View>
  );
};

export default MessageList;
