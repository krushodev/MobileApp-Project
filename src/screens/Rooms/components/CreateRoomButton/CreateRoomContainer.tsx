import { useState } from 'react';
import { useSelector } from 'react-redux';
import { randomUUID } from 'expo-crypto';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import socket from '../../../../api/socket';

import { FAB } from 'react-native-paper';
import { Modal } from '../../../../components';
import CreateRoomModalContent from '../CreateRoomModalContent/CreateRoomModalContent';

import { createRoom } from '../../../../api/routes/roomsRoutes';
import { useModal } from '../../../../hooks/useModal';

import styles from './CreateRoomContainer.styles';
import colors from '../../../../constants/colors';

import type { IUser, RoomBody } from '../../../../types';
import type { IRootState } from '../../../../store';

const CreateRoomContainer = () => {
  const [inputValues, setInputValues] = useState({ name: '', password: '' });
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const { isVisible, showModal, hideModal } = useModal();

  const queryClient = useQueryClient();

  const user = useSelector<IRootState>(state => state.auth.user);

  const mutation = useMutation({
    mutationFn: createRoom,
    onMutate: variables => {
      socket.emit('createRoom', variables);
    },
    onSuccess: async () => {
      await queryClient.refetchQueries({ queryKey: ['roomsList'] });
    }
  });

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

    mutation.mutateAsync(newRoom);

    setInputValues({ name: '', password: '' });

    hideModal();
  };

  return (
    <>
      <Modal isVisible={isVisible} onClose={hideModal}>
        <CreateRoomModalContent
          handleCreateRoom={handleCreateRoom}
          inputValues={inputValues}
          setIsSwitchOn={setIsSwitchOn}
          isSwitchOn={isSwitchOn}
          setInputValues={setInputValues}
        />
      </Modal>
      <FAB icon="plus" color={colors.secondary} style={styles.button} onPress={showModal} />
    </>
  );
};

export default CreateRoomContainer;
