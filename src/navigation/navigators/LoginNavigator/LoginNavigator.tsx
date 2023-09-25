import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '../../../screens';

const Stack = createNativeStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default LoginNavigator;
