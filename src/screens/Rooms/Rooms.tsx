import { useQuery, useQueryClient } from '@tanstack/react-query';
import socket from '../../api/socket';

import { View } from 'react-native';
import { CreateRoomContainer, RoomsList } from './components';

import { listRooms } from '../../api/routes/roomsRoutes';

import styles from './Rooms.styles';
import { useRoute } from '@react-navigation/native';

const Rooms = () => {
  const query = useQuery({ queryKey: ['roomsList'], queryFn: listRooms });
  const params = useRoute().params as { isButtonPressed: boolean };

  const queryClient = useQueryClient();

  socket.on('resolveNewRooms', async () => {
    await queryClient.refetchQueries({ queryKey: ['roomsList'] });
  });

  return (
    <View style={styles.container}>
      <RoomsList roomsList={query.data} />
      <CreateRoomContainer isButtonPressed={params.isButtonPressed} />
    </View>
  );
};

export default Rooms;
