import { View } from 'react-native';
import { Avatar, Text } from 'react-native-paper';

import styles from './UserCard.styles';

const UserCard = () => {
  return (
    <View style={styles.container}>
      <Avatar.Image size={70} source={{ uri: `https://picsum.photos/2${Math.round(Math.random() * 100)}` }} />
      <View>
        <Text variant="titleLarge">User</Text>
        <Text variant="titleMedium">user@email.com</Text>
      </View>
    </View>
  );
};

export default UserCard;
