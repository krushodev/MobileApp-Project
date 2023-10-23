import { useNavigation } from '@react-navigation/native';
import * as yup from 'yup';

import { Formik } from 'formik';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { TextInput, Text, HelperText } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Title, Button } from '../../../../components';

import { globalStyles } from '../../../../../global.styles';
import styles from './LoginForm.styles';
import colors from '../../../../constants/colors';

import type { StackNavigation } from '../../../../navigation/types';

interface LoginFormProps {
  handleSubmit: (values: { email: string; password: string }) => Promise<void>;
}

const LoginForm = ({ handleSubmit }: LoginFormProps) => {
  const { navigate } = useNavigation<StackNavigation>();

  const validationSchema = yup.object({
    email: yup.string().email('Formato de correo inválido').required('Este campo es obligatorio'),
    password: yup.string().required('Este campo es obligatorio')
  });

  return (
    <Formik initialValues={{ email: '', password: '' }} validationSchema={validationSchema} onSubmit={values => handleSubmit(values)}>
      {({ handleBlur, handleChange, handleSubmit: submit, values, errors, touched }) => (
        <KeyboardAwareScrollView contentContainerStyle={[globalStyles.container, styles.container]}>
          <ScrollView contentContainerStyle={[globalStyles.container, styles.formContainer]}>
            <Title title="Iniciar sesión" align="center" />
            <View style={styles.inputsContainer}>
              <View>
                <TextInput
                  label="Email"
                  error={errors.email && touched.email ? true : false}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  style={styles.input}
                  theme={{ colors: { primary: colors.chetwodeBlue600 } }}
                ></TextInput>
                <HelperText visible={errors.email && touched.email ? true : false} type="error">
                  {errors.email}
                </HelperText>
              </View>
              <View>
                <TextInput
                  label="Contraseña"
                  error={errors.password && touched.password ? true : false}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  style={styles.input}
                  theme={{ colors: { primary: colors.chetwodeBlue600 } }}
                ></TextInput>
                <HelperText visible={errors.password && touched.password ? true : false} type="error">
                  {errors.password}
                </HelperText>
              </View>
            </View>
            <Button text="Iniciar sesión" type="primary" onPress={() => submit()} />
            <View style={styles.redirectContainer}>
              <Text style={[globalStyles.textRegular, styles.redirectText]}>¿No tienes una cuenta?</Text>
              <TouchableOpacity onPress={() => navigate('Signup')}>
                <Text style={[globalStyles.textBold, styles.redirectButton]}>Registrarse</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAwareScrollView>
      )}
    </Formik>
  );
};

export default LoginForm;
