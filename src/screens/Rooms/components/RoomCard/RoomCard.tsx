import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useQueryClient } from '@tanstack/react-query';
import socket from '../../../../services/socket';

import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';

import { addMember } from '../../../../api/routes/roomsRoutes';

import { showToast } from '../../../../helper/toast';
import { addUserRoom } from '../../../../store/slices/authSlice';

import { globalStyles } from '../../../../../global.styles';
import styles from './RoomCard.styles';

import type { IRootState } from '../../../../store';
import type { StackNavigation } from '../../../../navigation/types';
import type { IRoom, IUser } from '../../../../types';

interface RoomCardProps {
  room: IRoom;
  showModal: () => void;
  setRoomSelected: React.Dispatch<React.SetStateAction<IRoom | undefined>>;
}

const RoomCard = ({ room, showModal, setRoomSelected }: RoomCardProps) => {
  const { navigate } = useNavigation<StackNavigation>();
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const user = useSelector<IRootState>(state => state.auth.user);

  socket.on('updateRoom', async () => {
    await queryClient.refetchQueries({ queryKey: ['roomsList', { roomId: room.id }] });
  });

  const handleClick = async () => {
    const userIsInRoom = (user as IUser).rooms.some(userRoom => {
      return userRoom.room === room.id;
    });

    const isOwner = room.owner === (user as IUser).id;

    if (!userIsInRoom && !isOwner) {
      if (room.isPrivate) {
        setRoomSelected(room);
        showModal();

        return;
      }

      const result = await addMember({ rid: room.id, uid: (user as IUser).id });

      if (!result) return;

      await queryClient.refetchQueries({ queryKey: ['roomsList', { roomId: room.id }] });

      showToast({ message: 'Te has unido a la room', type: 'info' });

      dispatch(addUserRoom({ room: room.id, isOwner: false }));
    }

    navigate('ChatScreen', { roomId: room.id, title: room.name });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleClick}>
      <Text style={[globalStyles.textRegular, styles.roomNameText]}>{room.name}</Text>
      <Text style={[globalStyles.textRegular, styles.roomInfoText]}>Miembros: {room.members?.length}</Text>
    </TouchableOpacity>
  );
  Text;
};

export default RoomCard;
