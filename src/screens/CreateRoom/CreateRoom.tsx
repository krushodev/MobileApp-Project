import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { randomUUID } from 'expo-crypto';
import socket from '../../services/socket';

import { ScrollView } from 'react-native';
import { Loading, Title } from '../../components';
import CreateRoomForm from './components/CreateRoomForm/CreateRoomForm';

import { createRoom } from '../../api/routes/roomsRoutes';
import { showToast } from '../../helper/toast';
import { addUserRoom } from '../../store/slices/authSlice';

import type { IUser, RoomBody } from '../../types';
import type { IRootState } from '../../store';
import type { StackNavigation } from '../../navigation/types';

const CreateRoom = () => {
  const [loading, setLoading] = useState(false);

  const queryClient = useQueryClient();
  const { navigate } = useNavigation<StackNavigation>();
  const dispatch = useDispatch();

  const user = useSelector<IRootState>(state => state.auth.user);

  const mutation = useMutation({
    mutationFn: createRoom,
    onMutate: variables => {
      socket.emit('createRoom', variables);
    },
    onSuccess: async variables => {
      await queryClient.refetchQueries({ queryKey: ['roomsList'] });
      showToast({ message: 'Nueva room creada', type: 'info' });
      dispatch(addUserRoom({ room: variables?.id, isOwner: false }));
      setLoading(false);
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

    setLoading(true);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <ScrollView>
      <Title title="Crear Room" />
      <CreateRoomForm handleSubmit={handleSubmit} />
    </ScrollView>
  );
};

export default CreateRoom;
