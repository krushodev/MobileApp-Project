import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { decodeToken } from 'react-jwt';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

import { setUser } from '../../store/slices/authSlice';
import { login } from '../../api/routes/authRoutes';

import type { IUser } from '../../types';

import styles from './Login.styles';

interface FormLoginValuesProps {
  email: string;
  password: string;
}

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values: FormLoginValuesProps) => {
    const result = await login(values);

    if (!result) return;

    const { accessToken, refreshToken } = result;

    const decodedAccessToken: { user: IUser } | null = decodeToken(accessToken);
    const decodedRefreshToken: { user: { id: string } } | null = decodeToken(refreshToken);

    if (decodedAccessToken?.user && decodedRefreshToken?.user.id) {
      dispatch(setUser({ accessToken, user: decodedAccessToken.user }));
      await AsyncStorage.setItem('token', JSON.stringify(refreshToken));
    }
  };

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

export default Login;
