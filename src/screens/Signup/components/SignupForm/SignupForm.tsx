import { useNavigation } from '@react-navigation/native';

import { TouchableOpacity, View, ScrollView } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { Formik } from 'formik';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { globalStyles } from '../../../../../global.styles';
import styles from './SignupForm.styles';
import colors from '../../../../constants/colors';

import type { StackNavigation } from '../../../../navigation/types';

interface SignupFormProps {
  handleSubmit: (values: { username: string; email: string; password: string }) => Promise<void>;
}

const SignupForm = ({ handleSubmit }: SignupFormProps) => {
  const { navigate } = useNavigation<StackNavigation>();

  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      onSubmit={values => {
        handleSubmit(values);
      }}
    >
      {({ handleChange, handleBlur, handleSubmit: submit, values }) => (
        <KeyboardAwareScrollView contentContainerStyle={[globalStyles.container, styles.container]}>
          <ScrollView contentContainerStyle={[globalStyles.container, styles.formContainer]}>
            <View style={styles.inputsContainer}>
              <TextInput
                label="Nombre de usuario"
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                style={styles.input}
                textColor={colors.chetwodeBlue900}
                underlineColor={colors.chetwodeBlue950}
              ></TextInput>
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
              <Text style={[globalStyles.textBold, styles.redirectText]}>¿Ya tienes una cuenta?</Text>
              <TouchableOpacity onPress={() => navigate('Login')}>
                <Text style={[globalStyles.textBold, styles.redirectButton]}>Inicia sesión</Text>
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
