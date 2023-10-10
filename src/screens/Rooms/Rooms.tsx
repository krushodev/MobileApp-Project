import { useQuery, useQueryClient } from '@tanstack/react-query';
import socket from '../../api/socket';

import { View } from 'react-native';
import { RoomsList } from './components';

import { listRooms } from '../../api/routes/roomsRoutes';

import styles from './Rooms.styles';

const Rooms = () => {
  const queryClient = useQueryClient();
  const query = useQuery({ queryKey: ['roomsList'], queryFn: listRooms });

  socket.on('resolveNewRooms', async () => {
    await queryClient.refetchQueries({ queryKey: ['roomsList'] });
  });

  return (
    <View style={styles.container}>
      <RoomsList roomsList={query.data} />
    </View>
  );
};

export default Rooms;
