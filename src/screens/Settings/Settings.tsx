import { View } from 'react-native';

import SettingsContainer from '../../components/SettingsContainer/SettingsContainer';

import styles from './Settings.styles';

const Settings = () => {
  return (
    <View style={styles.container}>
      <SettingsContainer />
    </View>
  );
};

export default Settings;
