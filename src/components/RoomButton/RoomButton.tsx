import { useState } from 'react';
import { useSelector } from 'react-redux';
import { randomUUID } from 'expo-crypto';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import socket from '../../api/socket';

import { FAB } from 'react-native-paper';
import RoomModal from '../RoomModal/RoomModal';

import { createRoom } from '../../api/routes/roomsRoutes';

import styles from './RoomButton.styles';
import colors from '../../constants/colors';

import type { IUser, RoomBody } from '../../types';
import type { IRootState } from '../../store';

const RoomButton = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const user = useSelector<IRootState>(state => state.auth.user);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createRoom,
    onMutate: variables => {
      socket.emit('createRoom', variables);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['roomsList'] });
    }
  });

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const handleCreateRoom = () => {
    const newRoom: RoomBody = {
      id: randomUUID(),
      name: inputValue,
      topics: ['topic1'],
      owner: (user as IUser).id,
      members: [{ user: (user as IUser).id }]
    };

    console.log(newRoom);

    mutation.mutateAsync(newRoom);

    setInputValue('');

    hideModal();
  };

  return (
    <>
      <RoomModal
        handleCreateRoom={handleCreateRoom}
        hideModal={hideModal}
        inputValue={inputValue}
        setInputValue={setInputValue}
        isModalVisible={isModalVisible}
      />
      <FAB icon="plus" color={colors.secondary} style={styles.button} onPress={showModal} />
    </>
  );
};

export default RoomButton;
