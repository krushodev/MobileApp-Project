import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Chat, Home, Rooms } from '../screens';

import type { RootStackParamList } from './types/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Rooms" component={Rooms} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
