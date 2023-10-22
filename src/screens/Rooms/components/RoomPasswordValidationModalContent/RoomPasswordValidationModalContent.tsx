import { View } from 'react-native';
import { Button, TextInput, Text } from 'react-native-paper';

import { globalStyles } from '../../../../../global.styles';
import styles from './RoomPasswordValidationModalContent.styles';
import colors from '../../../../constants/colors';

interface PasswordValidationModalContentProps {
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: () => void;
}

const RoomPasswordValidationModalContent = ({ setInputValue, handleSubmit }: PasswordValidationModalContentProps) => {
  return (
    <View style={styles.container}>
      <Text variant="titleMedium" style={[globalStyles.textBold, styles.title]}>
        Room Privada
      </Text>
      <View style={[globalStyles.container, styles.formContainer]}>
        <TextInput
          mode="outlined"
          label="Contraseña"
          placeholder="Ingresa la contraseña"
          onChangeText={setInputValue}
          style={styles.input}
          textColor={colors.chetwodeBlue900}
          underlineColor={colors.chetwodeBlue950}
        />
        <Button style={styles.button} onPress={handleSubmit}>
          Ingresar
        </Button>
      </View>
    </View>
  );
};

export default RoomPasswordValidationModalContent;
