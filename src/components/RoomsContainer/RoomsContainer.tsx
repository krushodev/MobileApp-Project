import { useQuery, useQueryClient } from '@tanstack/react-query';
import socket from '../../api/socket';

import { View } from 'react-native';
import RoomButton from '../RoomButton/RoomButton';
import RoomsList from '../RoomsList/RoomsList';

import { listRooms } from '../../api/routes/roomsRoutes';

import styles from './RoomsContainer.styles';

const RoomsContainer = () => {
  const query = useQuery({ queryKey: ['roomsList'], queryFn: listRooms });

  const queryClient = useQueryClient();

  socket.on('resolveNewRooms', async () => {
    await queryClient.refetchQueries({ queryKey: ['roomsList'] });
  });

  return (
    <View style={styles.container}>
      <RoomsList roomsList={query.data} />
      <RoomButton />
    </View>
  );
};

export default RoomsContainer;
