import { useRef } from 'react';

import { FlatList, View } from 'react-native';
import MessageCard from '../MessageCard/MessageCard';

import { globalStyles } from '../../../../../global.styles';
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
    <View style={[styles.listContainer, globalStyles.container]}>
      <FlatList
        ref={listViewRef}
        data={messagesList}
        onContentSizeChange={handleScroll}
        onLayout={handleScroll}
        renderItem={({ item }) => <MessageCard data={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default MessageList;
