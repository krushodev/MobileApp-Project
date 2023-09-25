import { View } from 'react-native';
import { Avatar, Text } from 'react-native-paper';

import styles from './UserCard.styles';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store';
import { IUser } from '../../types';

const UserCard = () => {
  const user = useSelector<IRootState>(state => state.user.user) as IUser;

  return (
    <View style={styles.container}>
      <Avatar.Image size={70} source={{ uri: user.image }} />
      <View>
        <Text variant="titleLarge">
          {user.firstName} {user.lastName}
        </Text>
        <Text variant="titleMedium">{user.email}</Text>
      </View>
    </View>
  );
};

export default UserCard;
