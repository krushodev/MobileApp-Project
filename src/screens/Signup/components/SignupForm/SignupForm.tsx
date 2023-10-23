import { useNavigation } from '@react-navigation/native';

import { TouchableOpacity, View, ScrollView } from 'react-native';
import { TextInput, Text } from 'react-native-paper';
import { Formik } from 'formik';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Title, Button } from '../../../../components';

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
            <Title title="Registrarse" align="center" />
            <View style={styles.inputsContainer}>
              <TextInput
                label="Nombre de usuario"
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                style={styles.input}
                theme={{ colors: { primary: colors.chetwodeBlue600 } }}
              ></TextInput>
              <TextInput
                label="Email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                style={styles.input}
                theme={{ colors: { primary: colors.chetwodeBlue600 } }}
              ></TextInput>
              <TextInput
                label="Contraseña"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                style={styles.input}
                theme={{ colors: { primary: colors.chetwodeBlue600 } }}
              ></TextInput>
            </View>
            <Button text="Registrarse" type="primary" onPress={() => submit()} />
            <View style={styles.redirectContainer}>
              <Text style={[globalStyles.textRegular, styles.redirectText]}>¿Ya tienes una cuenta?</Text>
              <TouchableOpacity onPress={() => navigate('Login')}>
                <Text style={[globalStyles.textBold, styles.redirectButton]}>Iniciar sesión</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAwareScrollView>
      )}
    </Formik>
  );
};

export default SignupForm;
