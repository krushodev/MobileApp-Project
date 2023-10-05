import { useRoute } from '@react-navigation/native';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import socket from '../../api/socket';

import { View } from 'react-native';
import { Drawer } from '../../components';
import { DrawerChatContent, MessageForm, MessageList } from './components';

import { getRoom } from '../../api/routes/roomsRoutes';

import styles from './Chat.styles';

const Chat = () => {
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

export default Chat;
