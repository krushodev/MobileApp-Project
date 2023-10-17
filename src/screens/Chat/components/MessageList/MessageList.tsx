import { useRef, useState } from 'react';

import { FlatList, View } from 'react-native';
import { Text } from 'react-native-paper';
import Message from '../Message/Message';

import styles from './MessageList.styles';

import type { IMessage } from '../../../../types';

interface MessageListProps {
  messagesList: IMessage[] | undefined;
}

const MessageList = ({ messagesList }: MessageListProps) => {
  const listViewRef = useRef<FlatList<IMessage>>(null);

  const handleScroll = () => {
    if (listViewRef.current) {
      listViewRef.current.scrollToEnd({ animated: true });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          ref={listViewRef}
          data={messagesList}
          onContentSizeChange={handleScroll}
          renderItem={({ item }) => <Message data={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default MessageList;
