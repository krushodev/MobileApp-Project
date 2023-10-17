import { View, Text } from 'react-native';
import UserCard from './components/UserCard/UserCard';

import styles from './Profile.styles';
import { Title } from '../../components';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Title title="Profile" />
      <UserCard />
    </View>
  );
};

export default Profile;
