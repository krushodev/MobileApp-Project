import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';

import { globalStyles } from '../../../global.styles';
import styles from './Button.styles';

interface ButtonProps {
  text: string;
  type: 'primary' | 'secondary';
  style?: {};
  contentStyle?: {};
  onPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  onLongPress?: () => void;
}

const Button = ({ text, type, style, contentStyle, onPress, onPressIn, onPressOut, onLongPress }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, type === 'primary' ? styles.buttonPrimary : styles.buttonSecondary, style]}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onLongPress={onLongPress}
    >
      <Text style={[globalStyles.textRegular, styles.text, type === 'primary' ? styles.textPrimary : styles.textSecondary, contentStyle]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
