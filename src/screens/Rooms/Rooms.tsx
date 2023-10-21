import { useQuery, useQueryClient } from '@tanstack/react-query';
import socket from '../../services/socket';

import { View } from 'react-native';
import { Title } from '../../components';
import { RoomsList } from './components';

import { listRooms } from '../../api/routes/roomsRoutes';

import { globalStyles } from '../../../global.styles';

const Rooms = () => {
  const queryClient = useQueryClient();
  const query = useQuery({ queryKey: ['roomsList'], queryFn: listRooms });

  socket.on('resolveNewRooms', async () => {
    await queryClient.refetchQueries({ queryKey: ['roomsList'] });
  });

  return (
    <View style={globalStyles.container}>
      <Title title="Rooms" />
      <RoomsList roomsList={query.data} />
    </View>
  );
};

export default Rooms;
