import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeNavigator from './HomeNavigator';
import { Home } from '../screens';

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <BottomTab.Screen name="Home" component={Home} />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;
