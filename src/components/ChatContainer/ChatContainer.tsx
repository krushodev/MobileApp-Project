import { useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { listMessages } from '../../api/routes/roomsRoutes';

import { View } from 'react-native';

import MessageList from '../MessageList/MessageList';
import MessageForm from '../MessageForm/MessageForm';
import Drawer from '../Drawer/Drawer';
import DrawerChatContent from '../DrawerChatContent/DrawerChatContent';

import styles from './ChatContainer.styles';

const ChatContainer = () => {
  const query = useQuery({ queryKey: ['messagesList'], queryFn: () => listMessages(params.roomId) });

  const params = useRoute().params as { roomId: string };
  const queryClient = useQueryClient();
  const navigation = useNavigation();

  const handleRemoveQueries = async () => {
    queryClient.removeQueries({ queryKey: ['messagesList'] });
  };

  useEffect(() => {
    if (!navigation.isFocused()) {
      handleRemoveQueries();
    }
  });

  return (
    <View style={styles.container}>
      <Drawer position="right" content={DrawerChatContent}>
        <MessageList messagesList={query.data} />
        <MessageForm roomId={params.roomId} />
      </Drawer>
    </View>
  );
};

export default ChatContainer;
