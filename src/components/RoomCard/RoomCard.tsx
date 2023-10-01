import { useNavigation } from '@react-navigation/native';

import { TouchableOpacity, Text } from 'react-native';

import type { IRoom } from '../../types';

import styles from './RoomCard.styles';
import { StackNavigation } from '../../navigation/types';

const RoomCard = ({ item }: { item: IRoom }) => {
  const { navigate } = useNavigation<StackNavigation>();

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigate('ChatScreen', { roomId: item.id })}>
      <Text style={styles.text}>{item.name}</Text>
      <Text>Members: {item.members?.length} </Text>
    </TouchableOpacity>
  );
};

export default RoomCard;
