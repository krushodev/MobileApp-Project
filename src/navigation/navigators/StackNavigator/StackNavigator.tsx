import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabNavigator from '../BottomTabNavigator/BottomTabNavigator';

import { Chat, Rooms } from '../../../screens';

import type { RootStackParamList } from '../../types';

type screens = ['HomeScreen', 'RoomsScreen', 'ChatScreen'];

const Stack = createNativeStackNavigator<RootStackParamList<screens>>();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={BottomTabNavigator} />
      <Stack.Group>
        <Stack.Screen name="RoomsScreen" component={Rooms} />
        <Stack.Screen
          name="ChatScreen"
          component={Chat}
          options={({ route }) => {
            const params = route.params as unknown as { roomId?: string; title?: string };

            return {
              headerShown: true,
              title: params.title ? params.title : 'Room'
            };
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
