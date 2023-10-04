import { useRoute } from '@react-navigation/native';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import socket from '../../api/socket';

import { View } from 'react-native';
import MessageList from '../MessageList/MessageList';
import MessageForm from '../MessageForm/MessageForm';
import Drawer from '../Drawer/Drawer';
import DrawerChatContent from '../DrawerChatContent/DrawerChatContent';

import { getRoom } from '../../api/routes/roomsRoutes';

import styles from './ChatContainer.styles';

const ChatContainer = () => {
  const params = useRoute().params as { roomId: string };

  const queryClient = useQueryClient();

  const query = useQuery({ queryKey: ['roomsList', { room: params.roomId }], queryFn: () => getRoom(params.roomId) });

  socket.on('receiveMessages', async data => {
    await queryClient.refetchQueries({ queryKey: ['roomsList', { room: data.id }] });
  });

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
