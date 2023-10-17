import { useDispatch } from 'react-redux';
import { decodeToken } from 'react-jwt';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginForm from './components/LoginForm/LoginForm';

import { setUser } from '../../store/slices/authSlice';
import { login } from '../../api/routes/authRoutes';
import { showToast } from '../../helper/toast';

import type { IUser } from '../../types';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values: { email: string; password: string }) => {
    const result = await login(values);

    if (!result) return;

    const { accessToken, refreshToken } = result;

    const decodedAccessToken: { user: IUser } | null = decodeToken(accessToken);
    const decodedRefreshToken: { user: { id: string } } | null = decodeToken(refreshToken);

    if (decodedAccessToken?.user && decodedRefreshToken?.user.id) {
      dispatch(setUser({ accessToken, user: decodedAccessToken.user }));
      await AsyncStorage.setItem('token', JSON.stringify(refreshToken));
    }

    showToast({ message: 'Logueo exitoso', type: 'success' });
  };

  return <LoginForm handleSubmit={handleSubmit} />;
};

export default Login;
