import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { TouchableOpacity, Text, Alert } from 'react-native';

import { addMember } from '../../../../api/routes/roomsRoutes';

import styles from './RoomCard.styles';

import type { IRootState } from '../../../../store';
import type { StackNavigation } from '../../../../navigation/types';
import type { IRoom, IUser } from '../../../../types';
import { useQueryClient } from '@tanstack/react-query';

interface RoomCardProps {
  item: IRoom;
  showModal: () => void;
  setRoomSelected: React.Dispatch<React.SetStateAction<IRoom | undefined>>;
}

const RoomCard = ({ item, showModal, setRoomSelected }: RoomCardProps) => {
  const { navigate } = useNavigation<StackNavigation>();
  const queryClient = useQueryClient();
  const user = useSelector<IRootState>(state => state.auth.user);

  const handleClick = async () => {
    const userIsInRoom = item.members.some(member => {
      return member.user.id === (user as IUser).id;
    });

    if (item.isPrivate && !userIsInRoom) {
      setRoomSelected(item);
      showModal();

      return;
    }

    if (!userIsInRoom) {
      const result = await addMember({ rid: item.id, uid: (user as IUser).id });

      if (!result) return;

      await queryClient.refetchQueries({ queryKey: ['roomsList', { roomId: item.id }] });
    }

    navigate('ChatScreen', { roomId: item.id });
  };

  return (
    <>
      <TouchableOpacity style={styles.container} onPress={handleClick}>
        <Text style={styles.text}>{item.name}</Text>
        <Text>Members: {item.members?.length} </Text>
      </TouchableOpacity>
    </>
  );
};

export default RoomCard;
