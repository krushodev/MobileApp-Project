import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { randomUUID } from 'expo-crypto';

import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { Title } from '../../components';
import SettingsCard from './components/SettingsCard/SettingsCard';

import settingsList from '../../global/settings';
import { removeUser } from '../../store/slices/authSlice';
import { showToast } from '../../helper/toast';

import { globalStyles } from '../../../global.styles';
import styles from './Settings.styles';

const Settings = () => {
  const dispatch = useDispatch();

  const handleClick = async () => {
    await AsyncStorage.removeItem('token');
    dispatch(removeUser());
    showToast({ message: 'Has cerrado sesión', type: 'info' });
  };

  return (
    <View style={globalStyles.container}>
      <Title title="Ajustes" />
      <View style={[globalStyles.container, styles.optionsContainer]}>
        <View>
          {settingsList.map(item => (
            <SettingsCard key={randomUUID()} title={item.name} icon={item.icon} />
          ))}
        </View>
        <Button icon="logout" style={styles.button} textColor="white" onPress={handleClick}>
          Cerrar sesión
        </Button>
      </View>
    </View>
  );
};

export default Settings;
