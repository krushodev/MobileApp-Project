import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { View } from 'react-native';
import { Button, Divider, Text } from 'react-native-paper';

import { removeUser } from '../../store/slices/authSlice';

import settingsList from '../../global/settings';

import styles from './Settings.styles';
import SettingsCard from './components/SettingsCard/SettingsCard';
import { randomUUID } from 'expo-crypto';

const Settings = () => {
  const dispatch = useDispatch();

  const handleClick = async () => {
    await AsyncStorage.removeItem('token');
    dispatch(removeUser());
  };

  return (
    <View style={styles.container}>
      <View>
        {settingsList.map(item => (
          <SettingsCard key={randomUUID()} title={item.name} icon={item.icon} />
        ))}
      </View>
      <Button icon="logout" style={styles.button} textColor="white" onPress={handleClick}>
        Cerrar sesión
      </Button>
    </View>
  );
};

export default Settings;
