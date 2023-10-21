import { View } from 'react-native';
import { Button, TextInput, Text } from 'react-native-paper';

import styles from './RoomPasswordValidationModalContent.styles';
import { globalStyles } from '../../../../../global.styles';

interface PasswordValidationModalContentProps {
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: () => void;
}

const RoomPasswordValidationModalContent = ({ setInputValue, handleSubmit }: PasswordValidationModalContentProps) => {
  return (
    <View style={styles.constainer}>
      <Text variant="titleMedium" style={[globalStyles.textBold, styles.title]}>
        Room Privada
      </Text>
      <View style={[globalStyles.container, styles.formContainer]}>
        <TextInput mode="outlined" label="Contraseña" placeholder="Ingresa la contraseña" onChangeText={setInputValue} />
      </View>
      <Button style={styles.button} onPress={handleSubmit}>
        Ingresar
      </Button>
    </View>
  );
};

export default RoomPasswordValidationModalContent;
