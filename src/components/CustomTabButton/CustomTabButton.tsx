import { TouchableOpacity, View } from 'react-native';

import styles from './CustomTabButton.styles';

import type { GestureResponderEvent } from 'react-native';

interface CustomTabButtonProps {
  children: React.ReactNode;
  onPress?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | GestureResponderEvent) => void;
}

const CustomTabButton = ({ children, onPress }: CustomTabButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.container}>{children}</View>
    </TouchableOpacity>
  );
};

export default CustomTabButton;
