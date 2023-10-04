import { View } from 'react-native';
import { RoomsContainer } from '../../components';

import styles from './Rooms.styles';

const Rooms = () => {
  return (
    <View style={styles.container}>
      <RoomsContainer />
    </View>
  );
};

export default Rooms;
