import { useNavigation } from '@react-navigation/native';

import { Formik } from 'formik';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { globalStyles } from '../../../../../global.styles';
import styles from './LoginForm.styles';
import colors from '../../../../constants/colors';

import type { StackNavigation } from '../../../../navigation/types';

interface LoginFormProps {
  handleSubmit: (values: { email: string; password: string }) => Promise<void>;
}

const LoginForm = ({ handleSubmit }: LoginFormProps) => {
  const { navigate } = useNavigation<StackNavigation>();

  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={values => handleSubmit(values)}>
      {({ handleBlur, handleChange, handleSubmit: submit, values }) => (
        <KeyboardAwareScrollView contentContainerStyle={[globalStyles.container, styles.container]}>
          <ScrollView contentContainerStyle={[globalStyles.container, styles.formContainer]}>
            <View style={styles.inputsContainer}>
              <TextInput
                label="Email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                style={styles.input}
                textColor={colors.chetwodeBlue900}
                underlineColor={colors.chetwodeBlue950}
              ></TextInput>
              <TextInput
                label="Contraseña"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                style={styles.input}
                textColor={colors.chetwodeBlue900}
                underlineColor={colors.chetwodeBlue950}
              ></TextInput>
            </View>
            <View style={styles.redirectContainer}>
              <Text style={[globalStyles.textBold, styles.redirectText]}>¿No tienes una cuenta?</Text>
              <TouchableOpacity onPress={() => navigate('Signup')}>
                <Text style={[globalStyles.textBold, styles.redirectButton]}>Regístrate</Text>
              </TouchableOpacity>
            </View>
            <Button textColor={colors.chetwodeBlue100} contentStyle={styles.button} onPress={() => submit()}>
              Iniciar sesión
            </Button>
          </ScrollView>
        </KeyboardAwareScrollView>
      )}
    </Formik>
  );
};

export default LoginForm;
