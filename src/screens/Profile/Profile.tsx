import { View } from 'react-native';
import { Title } from '../../components';
import UserCard from './components/UserCard/UserCard';

import { globalStyles } from '../../../global.styles';

const Profile = () => {
  return (
    <View style={globalStyles.container}>
      <Title title="Perfil" />
      <UserCard />
    </View>
  );
};

export default Profile;
