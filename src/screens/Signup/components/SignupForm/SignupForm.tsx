import { useNavigation } from '@react-navigation/native';

import { TouchableOpacity, View, ScrollView } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { Formik } from 'formik';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import styles from './SignupForm.styles';

import type { StackNavigation } from '../../../../navigation/types';

interface SignupFormProps {
  handleSubmit: (values: { username: string; email: string; password: string }) => Promise<void>;
}

const SignupForm = ({ handleSubmit }: SignupFormProps) => {
  const { navigate } = useNavigation<StackNavigation>();

  return (
    <Formik initialValues={{ username: '', email: '', password: '' }} onSubmit={values => handleSubmit(values)}>
      {({ handleChange, handleBlur, handleSubmit: submit, values }) => (
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
          <ScrollView contentContainerStyle={styles.formContainer}>
            <View style={styles.inputsContainer}>
              <TextInput
                label="Nombre de usuario"
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
              ></TextInput>
              <TextInput label="Email" onChangeText={handleChange('email')} onBlur={handleBlur('email')} value={values.email}></TextInput>
              <TextInput
                label="Contraseña"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              ></TextInput>
            </View>
            <View style={styles.redirectContainer}>
              <Text style={styles.redirectText}>¿Ya tienes una cuenta?</Text>
              <TouchableOpacity onPress={() => navigate('Login')}>
                <Text style={styles.redirectButton}>Inicia sesión</Text>
              </TouchableOpacity>
            </View>
            <Button textColor="white" contentStyle={styles.button} onPress={() => submit()}>
              Registrarte
            </Button>
          </ScrollView>
        </KeyboardAwareScrollView>
      )}
    </Formik>
  );
};

export default SignupForm;
