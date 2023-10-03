import { randomUUID } from 'expo-crypto';
import { useNavigation } from '@react-navigation/native';

import { View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { Formik } from 'formik';

import { signup } from '../../api/routes/authRoutes';

import type { StackNavigation } from '../../navigation/types';

interface FormSignupValuesProps {
  username: string;
  email: string;
  password: string;
}

const Signup = () => {
  const { navigate } = useNavigation<StackNavigation>();

  const handleSubmit = (values: FormSignupValuesProps) => {
    signup({ id: randomUUID(), ...values });
    navigate('Login');
  };

  return (
    <Formik initialValues={{ username: '', email: '', password: '' }} onSubmit={values => handleSubmit(values)}>
      {({ handleChange, handleBlur, handleSubmit: submit, values }) => (
        <View>
          <TextInput onChangeText={handleChange('username')} onBlur={handleBlur('username')} value={values.username}></TextInput>
          <TextInput onChangeText={handleChange('email')} onBlur={handleBlur('email')} value={values.email}></TextInput>
          <TextInput onChangeText={handleChange('password')} onBlur={handleBlur('password')} value={values.password}></TextInput>
          <Button onPress={() => submit()}>Enviar</Button>
        </View>
      )}
    </Formik>
  );
};

export default Signup;
