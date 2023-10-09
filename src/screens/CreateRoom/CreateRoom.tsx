import { randomUUID } from 'expo-crypto';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import CreateRoomForm from './components/CreateRoomForm';

import { createRoom } from '../../api/routes/roomsRoutes';
import socket from '../../api/socket';

import type { IUser, RoomBody } from '../../types';
import type { IRootState } from '../../store';
import type { StackNavigation } from '../../navigation/types';

const CreateRoom = () => {
  const queryClient = useQueryClient();
  const { navigate } = useNavigation<StackNavigation>();

  const user = useSelector<IRootState>(state => state.auth.user);

  const mutation = useMutation({
    mutationFn: createRoom,
    onMutate: variables => {
      socket.emit('createRoom', variables);
    },
    onSuccess: async () => {
      await queryClient.refetchQueries({ queryKey: ['roomsList'] });
      navigate('Rooms');
    }
  });

  const handleSubmit = (values: { name: string; password: string; private: boolean }) => {
    const newRoom: RoomBody = {
      id: randomUUID(),
      name: values.name,
      topics: ['topic1'],
      owner: (user as IUser).id,
      members: [{ user: (user as IUser).id }],
      isPrivate: values.private,
      password: values.private && values.password ? values.password : null
    };

    mutation.mutateAsync(newRoom);
  };

  return <CreateRoomForm handleSubmit={handleSubmit} />;
};

export default CreateRoom;