import { useNavigation } from '@react-navigation/native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import * as yup from 'yup';

import { TouchableOpacity, View, ScrollView } from 'react-native';
import { TextInput, Text, HelperText } from 'react-native-paper';
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

  const validationSchema = yup.object({
    username: yup.string().required('Este campo es obligatorio'),
    email: yup.string().email('Formato de correo inválido').required('Este campo es obligatorio'),
    password: yup.string().required('Este campo es obligatorio')
  });

  return (
    <Formik
      initialValues={{ username: '', email: '', password: '', passwordVisible: false }}
      validationSchema={validationSchema}
      onSubmit={values => {
        handleSubmit(values);
      }}
    >
      {({ handleChange, handleBlur, handleSubmit: submit, values, errors, touched, handleReset, setFieldValue }) => (
        <KeyboardAwareScrollView contentContainerStyle={[globalStyles.container, styles.container]}>
          <ScrollView contentContainerStyle={[globalStyles.container, styles.formContainer]}>
            <Title title="Registrarse" align="center" />
            <View style={styles.inputsContainer}>
              <View>
                <TextInput
                  label="Nombre de usuario"
                  error={errors.username && touched.username ? true : false}
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
                  style={styles.input}
                  theme={{ colors: { primary: colors.chetwodeBlue600 } }}
                ></TextInput>
                <HelperText visible={errors.username && touched.username ? true : false} type="error">
                  {errors.username}
                </HelperText>
              </View>
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
                  secureTextEntry={!values.passwordVisible}
                  right={
                    <TextInput.Icon
                      size={responsiveFontSize(3.5)}
                      color={colors.chetwodeBlue500}
                      icon={values.passwordVisible ? 'eye' : 'eye-off'}
                      onPress={() => setFieldValue('passwordVisible', !values.passwordVisible)}
                    />
                  }
                ></TextInput>
                <HelperText visible={errors.password && touched.password ? true : false} type="error">
                  {errors.password}
                </HelperText>
              </View>
            </View>
            <Button text="Registrarse" type="primary" onPress={() => submit()} />
            <View style={styles.redirectContainer}>
              <Text style={[globalStyles.textRegular, styles.text, styles.redirectText]}>¿Ya tienes una cuenta?</Text>
              <TouchableOpacity
                onPress={() => {
                  navigate('Login');
                  handleReset();
                }}
              >
                <Text style={[globalStyles.textBold, styles.text, styles.redirectButtonText]}>Iniciar sesión</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAwareScrollView>
      )}
    </Formik>
  );
};

export default SignupForm;
