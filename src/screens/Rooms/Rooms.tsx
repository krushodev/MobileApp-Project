import { useEffect } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import socket from '../../services/socket';

import { View } from 'react-native';
import { Title } from '../../components';
import { RoomsList } from './components';

import { listRooms } from '../../api/routes/roomsRoutes';

import { globalStyles } from '../../../global.styles';

import type { RoomBody } from '../../types';

const Rooms = () => {
  const queryClient = useQueryClient();
  const query = useQuery({ queryKey: ['roomsList'], queryFn: listRooms });

  useEffect(() => {
    socket.on('updateRooms', async () => {
      await queryClient.refetchQueries({ queryKey: ['roomsList'] });
    });

    socket.on('updateRoom', async (data: RoomBody) => {
      console.log(data);
      await queryClient.refetchQueries({ queryKey: ['roomsList', { roomId: data.id }] });
    });

    return () => {
      socket.off('updateRooms');
      socket.off('updateRoom');
    };
  });

  return (
    <View style={globalStyles.container}>
      <Title title="Rooms" />
      <RoomsList roomsList={query.data} />
    </View>
  );
};

export default Rooms;
