import { View } from 'react-native';
import UserCard from './components/UserCard/UserCard';
import UserStatsCard from './components/UserStatsCard/UserStatsCard';

import { globalStyles } from '../../../global.styles';

const Profile = () => {
  return (
    <View style={globalStyles.container}>
      <UserCard />
      <View style={globalStyles.container}>
        <UserStatsCard />
      </View>
    </View>
  );
};

export default Profile;
