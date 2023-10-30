import { useNavigation } from '@react-navigation/native';
import { useQueryClient } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import socket from '../../../../services/socket';

import RoomPasswordValidationModalContent from '../RoomPasswordValidationModalContent/RoomPasswordValidationModalContent';
import { Modal } from '../../../../components';

import { addMember } from '../../../../api/routes/roomsRoutes';
import { showToast } from '../../../../helper/toast';
import { addUserRoom } from '../../../../store/slices/authSlice';

import type { IRoom, IUser } from '../../../../types';
import type { IRootState } from '../../../../store';
import type { StackNavigation } from '../../../../navigation/types';

interface RoomPasswordValidationContainerProps {
  isVisible: boolean;
  hideModal: () => void;
  roomSelected: IRoom;
}

const RoomPasswordValidationContainer = ({ isVisible, hideModal, roomSelected }: RoomPasswordValidationContainerProps) => {
  const { navigate } = useNavigation<StackNavigation>();
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const user = useSelector<IRootState>(state => state.auth.user);

  const handleSubmit = async (values: { password: string }) => {
    const validation = values.password === roomSelected.password;

    if (!validation) {
      showToast({ message: 'Contraseña de Room incorrecta', type: 'error' });
      return;
    }

    const result = await addMember({ rid: roomSelected.id, uid: (user as IUser).id });

    if (!result) return;

    await queryClient.refetchQueries({ queryKey: ['roomsList', { roomId: roomSelected.id }] });

    socket.emit('updateMembers', roomSelected);

    hideModal();

    showToast({ message: 'Te has unido a la room', type: 'info' });

    dispatch(addUserRoom({ room: roomSelected.id, isOwner: false }));

    navigate('ChatScreen', { roomId: roomSelected.id, title: roomSelected.name });
  };

  return (
    <Modal isVisible={isVisible} onClose={hideModal}>
      <RoomPasswordValidationModalContent hideModal={hideModal} handleSubmit={handleSubmit} />
    </Modal>
  );
};

export default RoomPasswordValidationContainer;
