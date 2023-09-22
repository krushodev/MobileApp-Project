import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Chat, Rooms } from '../../../screens';
import BottomTabNavigator from '../BottomTabNavigator/BottomTabNavigator';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={BottomTabNavigator}
        options={{
          headerShown: false
        }}
      />
      <Stack.Group>
        <Stack.Screen
          name="RoomsScreen"
          component={Rooms}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="ChatScreen"
          component={Chat}
          options={{
            headerShown: true
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
