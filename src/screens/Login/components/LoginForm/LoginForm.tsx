import { useNavigation } from '@react-navigation/native';

import { Formik } from 'formik';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import styles from './LoginForm.styles';

import type { StackNavigation } from '../../../../navigation/types';

interface LoginFormProps {
  handleSubmit: (values: { email: string; password: string }) => Promise<void>;
}

const LoginForm = ({ handleSubmit }: LoginFormProps) => {
  const { navigate } = useNavigation<StackNavigation>();

  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={values => handleSubmit(values)}>
      {({ handleBlur, handleChange, handleSubmit: submit, values }) => (
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
          <ScrollView contentContainerStyle={styles.formContainer}>
            <View style={styles.inputsContainer}>
              <TextInput label="Email" onChangeText={handleChange('email')} onBlur={handleBlur('email')} value={values.email}></TextInput>
              <TextInput
                label="Contraseña"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              ></TextInput>
            </View>
            <View style={styles.redirectContainer}>
              <Text style={styles.redirectText}>¿No tienes una cuenta?</Text>
              <TouchableOpacity onPress={() => navigate('Signup')}>
                <Text style={styles.redirectButton}>Regístrate</Text>
              </TouchableOpacity>
            </View>
            <Button textColor="white" contentStyle={styles.button} onPress={() => submit()}>
              Iniciar sesión
            </Button>
          </ScrollView>
        </KeyboardAwareScrollView>
      )}
    </Formik>
  );
};

export default LoginForm;
