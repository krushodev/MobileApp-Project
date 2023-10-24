import { useSelector } from 'react-redux';
import { randomUUID } from 'expo-crypto';

import { View } from 'react-native';
import { Text } from 'react-native-paper';

import { globalStyles } from '../../../../../global.styles';
import styles from './UserStatsCard.styles';

import type { IUser } from '../../../../types';
import type { IRootState } from '../../../../store';

const UserStatsCard = () => {
  const user = useSelector<IRootState>(state => state.auth.user) as IUser;

  const stats = [
    {
      name: 'Rooms totales',
      data: user.rooms.length
    },
    {
      name: 'Rooms creadas',
      data: user.rooms.filter(item => item.isOwner).length
    }
  ];

  return (
    <View style={styles.container}>
      {stats.map(item => (
        <View style={styles.statContainer} key={randomUUID()}>
          <Text style={[globalStyles.textRegular, styles.statName]}>{item.name}</Text>
          <Text style={[globalStyles.textBold, styles.statData]}>{item.data}</Text>
        </View>
      ))}
    </View>
  );
};

export default UserStatsCard;
