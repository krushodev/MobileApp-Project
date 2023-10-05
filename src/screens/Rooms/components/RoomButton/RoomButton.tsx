import { useState } from 'react';
import { useSelector } from 'react-redux';
import { randomUUID } from 'expo-crypto';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import socket from '../../../../api/socket';

import { FAB } from 'react-native-paper';
import RoomModal from '../RoomModal/RoomModal';

import { createRoom } from '../../../../api/routes/roomsRoutes';

import styles from './RoomButton.styles';
import colors from '../../../../constants/colors';

import type { IUser, RoomBody } from '../../../../types';
import type { IRootState } from '../../../../store';

const RoomButton = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [inputValues, setInputValues] = useState({ name: '', password: '' });
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const user = useSelector<IRootState>(state => state.auth.user);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createRoom,
    onMutate: variables => {
      socket.emit('createRoom', variables);
    },
    onSuccess: async () => {
      await queryClient.refetchQueries({ queryKey: ['roomsList'] });
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
      name: inputValues.name,
      topics: ['topic1'],
      owner: (user as IUser).id,
      members: [{ user: (user as IUser).id }],
      isPrivate: isSwitchOn ? true : false,
      password: isSwitchOn && inputValues.password ? inputValues.password : null
    };

    console.log(newRoom);

    mutation.mutateAsync(newRoom);

    setInputValues({ name: '', password: '' });

    hideModal();
  };

  return (
    <>
      <RoomModal
        handleCreateRoom={handleCreateRoom}
        hideModal={hideModal}
        inputValues={inputValues}
        setInputValues={setInputValues}
        isModalVisible={isModalVisible}
        setIsSwitchOn={setIsSwitchOn}
        isSwitchOn={isSwitchOn}
      />
      <FAB icon="plus" color={colors.secondary} style={styles.button} onPress={showModal} />
    </>
  );
};

export default RoomButton;
