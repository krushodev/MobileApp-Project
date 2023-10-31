import { View, Text } from 'react-native';

import { responsiveFontSize } from 'react-native-responsive-dimensions';
import Image from '../../../../assets/images/image5.svg';

import { globalStyles } from '../../../../../global.styles';
import styles from './RoomEmptyCard.styles';

const RoomEmptyCard = () => {
  return (
    <View style={[globalStyles.container, styles.container]}>
      <View style={styles.imageContainer}>
        <Image height={responsiveFontSize(23)} />
      </View>
      <Text style={[globalStyles.textRegular, styles.text]}>No se encontraron rooms</Text>
    </View>
  );
};

export default RoomEmptyCard;
