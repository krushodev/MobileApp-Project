import { useState } from 'react';

import { View } from 'react-native';

import RoomButton from '../RoomButton/RoomButton';
import RoomsList from '../RoomsList/RoomsList';

import type { IRoom } from '../../types';

import styles from './RoomsContainer.styles';

const RoomsContainer = () => {
  const [roomsList, setRoomsList] = useState<IRoom[]>([]);
  return (
    <View style={styles.container}>
      <RoomsList roomsList={roomsList} />
      <RoomButton setRoomsList={setRoomsList} />
    </View>
  );
};

export default RoomsContainer;
