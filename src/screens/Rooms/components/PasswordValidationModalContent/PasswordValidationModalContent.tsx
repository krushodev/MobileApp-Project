import { View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

import styles from './PasswordValidationModalContent.styles';

interface PasswordValidationModalContentProps {}

const PasswordValidationModalContent = ({}: PasswordValidationModalContentProps) => {
  return (
    <View style={styles.constainer}>
      <Text style={styles.title}>Room Privada</Text>
      <View style={styles.formContainer}>
        <TextInput mode="outlined" label="Contraseña" placeholder="Ingresa la contraseña" />
      </View>
      <Button style={styles.button}>Ingresar</Button>
    </View>
  );
};

export default PasswordValidationModalContent;
