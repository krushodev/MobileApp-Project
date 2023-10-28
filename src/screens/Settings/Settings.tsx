import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { randomUUID } from 'expo-crypto';
import socket from '../../services/socket';

import { View } from 'react-native';
import { Title, Button } from '../../components';
import SettingsCard from './components/SettingsCard/SettingsCard';

import settingsList from '../../global/settings';
import { removeUser } from '../../store/slices/authSlice';
import { showToast } from '../../helper/toast';

import { globalStyles } from '../../../global.styles';
import styles from './Settings.styles';

import type { IRootState } from '../../store';
import type { IUser } from '../../types';

const Settings = () => {
  const dispatch = useDispatch();
  const user = useSelector<IRootState>(state => state.auth.user);

  const handlePress = async () => {
    await AsyncStorage.removeItem('token');
    socket.emit('removeConnection', (user as IUser).id);
    dispatch(removeUser());
    showToast({ message: 'Has cerrado sesión', type: 'info' });
  };

  return (
    <View style={globalStyles.container}>
      <Title title="Ajustes" />
      <View style={styles.optionsContainer}>
        <View style={styles.cardsContainer}>
          {settingsList.map(item => (
            <SettingsCard key={randomUUID()} title={item.name} icon={item.icon} />
          ))}
        </View>
        <Button text="Cerrar sesión" type="primary" onPress={() => handlePress()} />
      </View>
    </View>
  );
};

export default Settings;
