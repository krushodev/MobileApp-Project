import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { addMember } from '../../../../api/routes/roomsRoutes';

import RoomPasswordValidationModalContent from '../RoomPasswordValidationModalContent/RoomPasswordValidationModalContent';
import { Modal } from '../../../../components';

import type { IRoom, IUser } from '../../../../types';
import type { IRootState } from '../../../../store';
import type { StackNavigation } from '../../../../navigation/types';
import { useQueryClient } from '@tanstack/react-query';

interface RoomPasswordValidationContainerProps {
  isVisible: boolean;
  hideModal: () => void;
  roomSelected: IRoom;
}

const RoomPasswordValidationContainer = ({ isVisible, hideModal, roomSelected }: RoomPasswordValidationContainerProps) => {
  const [inputValue, setInputValue] = useState('');

  const { navigate } = useNavigation<StackNavigation>();
  const queryClient = useQueryClient();
  const user = useSelector<IRootState>(state => state.auth.user);

  const handleSubmit = async () => {
    const validation = inputValue === roomSelected.password;

    if (!validation) {
      hideModal();
      return;
    }

    const result = await addMember({ rid: roomSelected.id, uid: (user as IUser).id });

    if (!result) return;

    await queryClient.refetchQueries({ queryKey: ['roomsList', { roomId: roomSelected.id }] });

    hideModal();

    navigate('ChatScreen', { roomId: roomSelected.id });
  };

  return (
    <Modal isVisible={isVisible} onClose={hideModal}>
      <RoomPasswordValidationModalContent setInputValue={setInputValue} handleSubmit={handleSubmit} />
    </Modal>
  );
};

export default RoomPasswordValidationContainer;
