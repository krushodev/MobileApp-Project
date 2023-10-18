import { useSelector } from 'react-redux';

import { View } from 'react-native';
import { Text } from 'react-native-paper';

import styles from './HomeCard.styles';

import Image from '../../../../assets/images/text.svg';

import type { IRootState } from '../../../../store';
import type { IUser } from '../../../../types';

const HomeCard = () => {
  const user = useSelector<IRootState>(state => state.auth.user);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image width="100%" height={250} />
      </View>
      <View style={styles.textContainer}>
        <Text variant="headlineMedium">
          ¡Bienvenido,<Text style={styles.usernameText}> {(user as IUser).username}</Text>!
        </Text>
      </View>
    </View>
  );
};

export default HomeCard;
