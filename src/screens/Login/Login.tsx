import { useDispatch } from 'react-redux';
import { randomUUID } from 'expo-crypto';

import { setUser } from '../../store/slices/userSlice';

import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { IUser } from '../../types';

import { AntDesign } from '@expo/vector-icons';
import styles from './Login.styles';

const Login = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    const newUser: IUser = {
      id: randomUUID(),
      firstName: 'User',
      lastName: 'User',
      email: 'user@email.com',
      image: `https://picsum.photos/2${Math.round(Math.random() * 100)}`
    };

    dispatch(setUser(newUser));
  };

  return (
    <View style={styles.container}>
      <Button textColor="white" contentStyle={styles.button} onPress={handleClick}>
        Iniciar sesión
        <AntDesign name="google" />
      </Button>
    </View>
  );
};

export default Login;
