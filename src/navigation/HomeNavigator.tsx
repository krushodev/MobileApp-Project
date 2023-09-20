import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Chat, Home, Rooms } from '../screens';

import type { RootStackParamList } from './types/types';

const Stack = createNativeStackNavigator<RootStackParamList>();
import BottomTabNavigator from './BottomTabNavigator';

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={BottomTabNavigator} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Rooms" component={Rooms} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
