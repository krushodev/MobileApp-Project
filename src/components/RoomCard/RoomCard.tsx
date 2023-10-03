import { useNavigation } from '@react-navigation/native';

import { TouchableOpacity, Text } from 'react-native';

import type { IRoom, IUser } from '../../types';

import styles from './RoomCard.styles';
import { StackNavigation } from '../../navigation/types';
import { addMember } from '../../api/routes/roomsRoutes';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store';

const RoomCard = ({ item }: { item: IRoom }) => {
  const { navigate } = useNavigation<StackNavigation>();

  const user = useSelector<IRootState>(state => state.auth.user);

  const handleClick = async () => {
    const userIsInRoom = item.members.some(member => {
      console.log(member);
      return member.user.id === (user as IUser).id;
    });

    console.log(userIsInRoom);

    if (!userIsInRoom) {
      const result = await addMember({ rid: item.id, uid: (user as IUser).id });

      if (!result) return;
    }

    navigate('ChatScreen', { roomId: item.id });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleClick}>
      <Text style={styles.text}>{item.name}</Text>
      <Text>Members: {item.members?.length} </Text>
    </TouchableOpacity>
  );
};

export default RoomCard;
