import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useQueryClient } from '@tanstack/react-query';

import { TouchableOpacity, Text } from 'react-native';

import { addMember } from '../../../../api/routes/roomsRoutes';

import { showToast } from '../../../../helper/toast';
import { addUserRoom } from '../../../../store/slices/authSlice';

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

    navigate('ChatScreen', { roomId: room.id });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleClick}>
      <Text style={styles.text}>{room.name}</Text>
      <Text>Members: {room.members?.length} </Text>
    </TouchableOpacity>
  );
};

export default RoomCard;
