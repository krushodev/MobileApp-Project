import { useDispatch } from 'react-redux';

import { View } from 'react-native';
import { Button } from 'react-native-paper';

import UserCard from '../UserCard/UserCard';

import { removeUser } from '../../store/slices/userSlice';

import styles from './SettingsContainer.styles';

const SettingsContainer = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <UserCard />
      <Button style={styles.button} textColor="white" onPress={() => dispatch(removeUser())}>
        Logout
      </Button>
    </View>
  );
};

export default SettingsContainer;
