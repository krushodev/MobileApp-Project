import { useQuery, useQueryClient } from '@tanstack/react-query';

import { listRooms } from '../../api/routes/roomsRoutes';

import { View } from 'react-native';

import RoomButton from '../RoomButton/RoomButton';
import RoomsList from '../RoomsList/RoomsList';

import styles from './RoomsContainer.styles';

const RoomsContainer = () => {
  const query = useQuery({ queryKey: ['roomsList'], queryFn: listRooms });

  return (
    <View style={styles.container}>
      <RoomsList roomsList={query.data} />
      <RoomButton />
    </View>
  );
};

export default RoomsContainer;
