import { Formik } from 'formik';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import styles from './LoginForm.styles';

interface LoginFormProps {
  handleSubmit: (values: { email: string; password: string }) => Promise<void>;
}

const LoginForm = ({ handleSubmit }: LoginFormProps) => {
  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={values => handleSubmit(values)}>
      {({ handleBlur, handleChange, handleSubmit: submit, values }) => (
        <View style={styles.container}>
          <TextInput onChangeText={handleChange('email')} onBlur={handleBlur('email')} value={values.email}></TextInput>
          <TextInput onChangeText={handleChange('password')} onBlur={handleBlur('password')} value={values.password}></TextInput>
          <Button textColor="white" contentStyle={styles.button} onPress={() => submit()}>
            Enviar
          </Button>
        </View>
      )}
    </Formik>
  );
};

export default LoginForm;
