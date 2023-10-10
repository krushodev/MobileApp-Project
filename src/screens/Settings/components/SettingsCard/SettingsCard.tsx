import { TouchableOpacity, View } from 'react-native';
import { Divider, IconButton, Text } from 'react-native-paper';

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
          <IconButton icon={icon} size={30} />
          <Text variant="titleMedium">{title}</Text>
        </View>
        <IconButton icon="arrow-right" size={30} />
      </View>
    </TouchableOpacity>
  );
};

export default SettingsCard;
