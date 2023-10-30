import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import socket from '../services/socket';

import { setUser } from '../store/slices/authSlice';
import { getDataWithRefreshToken } from '../helper/auth';

import type { IRootState } from '../store';
import type { IUser } from '../types';

export const useAuth = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector<IRootState>(state => state.auth.user);

  const validateSession = async () => {
    const storageToken = await AsyncStorage.getItem('token');

    if (!storageToken) {
      return;
    }

    const data = await getDataWithRefreshToken(JSON.parse(storageToken));

    if (!data) {
      await AsyncStorage.removeItem('token');
      return;
    }

    const {
      accessToken,
      decodedAccessToken: { user }
    } = data;

    socket.emit('saveConnection', user.id);

    dispatch(setUser({ accessToken, user }));
  };

  useEffect(() => {
    if (!user) {
      (async function () {
        await validateSession();
        setLoading(false);
      })();
    } else {
      socket.emit('saveConnection', (user as IUser).id);
      setLoading(false);
    }
  }, []);

  return { loading, isAuthenticated: user ? true : false };
};
