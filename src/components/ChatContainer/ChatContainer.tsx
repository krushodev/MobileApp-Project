import { useRoute } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';

import { getRoom } from '../../api/routes/roomsRoutes';

import { View } from 'react-native';

import MessageList from '../MessageList/MessageList';
import MessageForm from '../MessageForm/MessageForm';
import Drawer from '../Drawer/Drawer';
import DrawerChatContent from '../DrawerChatContent/DrawerChatContent';

import styles from './ChatContainer.styles';

const ChatContainer = () => {
  const params = useRoute().params as { roomId: string };

  const query = useQuery({ queryKey: ['roomsList', { room: params.roomId }], queryFn: () => getRoom(params.roomId) });

  return (
    <View style={styles.container}>
      <Drawer position="right" content={DrawerChatContent}>
        <MessageList messagesList={query.data?.messages} />
        <MessageForm roomId={params.roomId} />
      </Drawer>
    </View>
  );
};

export default ChatContainer;
