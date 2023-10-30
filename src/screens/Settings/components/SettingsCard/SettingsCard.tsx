import { responsiveFontSize } from 'react-native-responsive-dimensions';

import { TouchableOpacity, View } from 'react-native';
import { IconButton, Text } from 'react-native-paper';

import { globalStyles } from '../../../../../global.styles';
import styles from './SettingsCard.styles';

interface SettingsCardProps {
  title: string;
  icon: string;
}

const SettingsCard = ({ title, icon }: SettingsCardProps) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <IconButton icon={icon} size={responsiveFontSize(4)} />
          <Text style={[globalStyles.textRegular, styles.infoText]}>{title}</Text>
        </View>
        <IconButton icon="arrow-right" size={responsiveFontSize(4)} />
      </View>
    </TouchableOpacity>
  );
};

export default SettingsCard;
