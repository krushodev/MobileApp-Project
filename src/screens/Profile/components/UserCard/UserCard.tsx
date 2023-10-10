import { useSelector } from 'react-redux';

import { View } from 'react-native';
import { Text, Avatar, IconButton } from 'react-native-paper';

import styles from './UserCard.styles';

import type { IRootState } from '../../../../store';
import type { IUser } from '../../../../types';

const UserCard = () => {
  const user = useSelector<IRootState>(state => state.auth.user) as IUser;

  return (
    <View style={styles.container}>
      <Avatar.Image style={styles.image} source={{ uri: 'https://picsum.photos/200' }} size={100} />
      <View style={styles.infoContainer}>
        <Text style={styles.text} variant="headlineMedium">
          {user.username}
        </Text>
        <Text style={styles.text} variant="titleMedium">
          {user.email}
        </Text>
        <View style={styles.locationContainer}>
          <IconButton icon="map-marker" iconColor="white" />
          <Text style={styles.text}>Location</Text>
        </View>
      </View>
    </View>
  );
};

export default UserCard;
