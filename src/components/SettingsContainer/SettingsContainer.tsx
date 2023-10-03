import { useDispatch } from 'react-redux';

import { View } from 'react-native';
import { Button } from 'react-native-paper';

import UserCard from '../UserCard/UserCard';

import { removeUser } from '../../store/slices/authSlice';

import styles from './SettingsContainer.styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SettingsContainer = () => {
  const dispatch = useDispatch();

  const handleClick = async () => {
    await AsyncStorage.removeItem('token');
    dispatch(removeUser());
  };

  return (
    <View style={styles.container}>
      <UserCard />
      <Button style={styles.button} textColor="white" onPress={handleClick}>
        Logout
      </Button>
    </View>
  );
};

export default SettingsContainer;
