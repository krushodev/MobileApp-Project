import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeNavigator from './HomeNavigator';
import { Home } from '../screens';
import Settings from '../screens/Settings/Settings';

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Settings" component={Settings} />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;
