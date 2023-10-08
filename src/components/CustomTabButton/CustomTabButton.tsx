import { TouchableOpacity, View } from 'react-native';

import styles from './CustomTabButton.styles';
import { useNavigation } from '@react-navigation/native';
import { BottomNavigation } from '../../navigation/types';

interface CustomTabButtonProps {
  children: React.ReactNode;
}

const CustomTabButton = ({ children }: CustomTabButtonProps) => {
  const { navigate } = useNavigation<BottomNavigation>();

  const handleClick = () => {
    navigate('Rooms', { isButtonPressed: true });
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleClick}>
      <View style={styles.container}>{children}</View>
    </TouchableOpacity>
  );
};

export default CustomTabButton;
