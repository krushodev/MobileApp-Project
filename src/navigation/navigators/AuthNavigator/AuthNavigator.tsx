import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Welcome, Login, Signup } from '../../../screens';

import type { RootStackParamList } from '../../types';

type screens = ['Welcome', 'Login', 'Signup'];

const Stack = createNativeStackNavigator<RootStackParamList<screens>>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
