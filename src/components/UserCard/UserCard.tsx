import { useSelector } from 'react-redux';

import { View } from 'react-native';
import { Text } from 'react-native-paper';

import type { IRootState } from '../../store';
import type { IUser } from '../../types';

import styles from './UserCard.styles';

const UserCard = () => {
  const user = useSelector<IRootState>(state => state.auth.user) as IUser;

  return (
    <View style={styles.container}>
      <View>
        <Text variant="titleLarge">{user.username}</Text>
        <Text variant="titleMedium">{user.email}</Text>
      </View>
    </View>
  );
};

export default UserCard;
