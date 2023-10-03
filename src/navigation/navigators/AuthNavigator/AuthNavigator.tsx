import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login, Signup } from '../../../screens';

import type { RootStackParamList } from '../../types';

type screens = ['Login', 'Signup'];

const Stack = createNativeStackNavigator<RootStackParamList<screens>>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
