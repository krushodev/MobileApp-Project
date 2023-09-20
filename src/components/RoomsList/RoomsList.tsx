import { View, Text, FlatList } from 'react-native';

import RoomCard from '../RoomCard/RoomCard';

import type { IRoom } from '../../types';

import styles from './RoomsList.styles';

interface RoomListProps {
  roomsList: IRoom[];
}

const RoomsListContainer = ({ roomsList }: RoomListProps) => {
  return (
    <View style={styles.container}>
      {roomsList.length > 0 ? (
        <FlatList data={roomsList} renderItem={({ item }) => <RoomCard item={item} />} keyExtractor={item => item.id} />
      ) : (
        <Text style={styles.textAlert}>No hay rooms</Text>
      )}
    </View>
  );
};

export default RoomsListContainer;
