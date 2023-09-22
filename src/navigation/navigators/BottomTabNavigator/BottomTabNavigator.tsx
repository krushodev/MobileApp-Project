import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home, Rooms, Settings } from '../../../screens';

import styles from './BottomTabNavigator.styles';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <Feather name="home" size={30} />
        }}
      />
      <Tab.Screen
        name="Rooms"
        component={Rooms}
        options={{
          tabBarIcon: () => <Feather name="message-circle" size={30} />
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: () => <Feather name="settings" size={30} />
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
