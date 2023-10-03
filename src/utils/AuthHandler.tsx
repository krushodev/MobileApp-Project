import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { LoginNavigator, StackNavigator } from '../navigation';
import { Text } from 'react-native-paper';

import { setUser } from '../store/slices/authSlice';
import { getDataWithRefreshToken } from '../helper';

import type { IRootState } from '../store';

const AuthHandler = () => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const user = useSelector<IRootState>(state => state.auth.user);

  console.log(user);

  const validateSession = async () => {
    const storageToken = await AsyncStorage.getItem('token');

    if (!storageToken) {
      console.log('entra acá');
      setLoading(false);
      return;
    }

    const data = await getDataWithRefreshToken(JSON.parse(storageToken));

    if (!data) {
      await AsyncStorage.removeItem('token');
      setLoading(false);
      return;
    }

    const {
      accessToken,
      decodedAccessToken: { user }
    } = data;

    dispatch(setUser({ accessToken, user }));
  };

  useEffect(() => {
    if (user) {
      setLoading(false);
      return;
    }
    validateSession();
  }, [user]);

  if (loading) {
    return <Text>Cargando...</Text>;
  }

  return user ? <StackNavigator /> : <LoginNavigator />;
};

export default AuthHandler;
