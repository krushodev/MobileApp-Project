import { View, Text } from 'react-native';
import UserCard from './components/UserCard/UserCard';

import styles from './Profile.styles';

const Profile = () => {
  return (
    <View style={styles.container}>
      <UserCard />
    </View>
  );
};

export default Profile;
