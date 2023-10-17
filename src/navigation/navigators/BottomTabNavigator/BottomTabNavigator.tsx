import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home, Rooms, Settings, CreateRoom, Profile } from '../../../screens';

import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import { CustomTabButton } from '../../../components';

import styles from './BottomTabNavigator.styles';
import colors from '../../../constants/colors';

import type { RootStackParamList } from '../../types';

type screens = ['Home', 'Rooms', 'CreateRoom', 'Profile', 'Settings'];

const Tab = createBottomTabNavigator<RootStackParamList<screens>>();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarHideOnKeyboard: true,
        headerShown: false
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIconContainer}>
              <Feather name="home" size={30} color={focused ? colors.chetwodeBlue900 : colors.chetwodeBlue400} />
              <Text
                variant="bodySmall"
                style={{ color: focused ? colors.chetwodeBlue900 : colors.chetwodeBlue400, fontWeight: focused ? 'bold' : 'normal' }}
              >
                Home
              </Text>
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Rooms"
        component={Rooms}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIconContainer}>
              <Feather name="message-circle" size={30} color={focused ? colors.chetwodeBlue900 : colors.chetwodeBlue400} />
              <Text
                variant="bodySmall"
                style={{ color: focused ? colors.chetwodeBlue900 : colors.chetwodeBlue400, fontWeight: focused ? 'bold' : 'normal' }}
              >
                Rooms
              </Text>
            </View>
          )
        }}
      />
      <Tab.Screen
        name="CreateRoom"
        component={CreateRoom}
        options={{
          tabBarIcon: () => <Feather name="plus" color="white" size={30} />,
          tabBarButton: props => <CustomTabButton {...props} />,
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIconContainer}>
              <Feather name="user" size={30} color={focused ? colors.chetwodeBlue900 : colors.chetwodeBlue400} />
              <Text
                variant="bodySmall"
                style={{ color: focused ? colors.chetwodeBlue900 : colors.chetwodeBlue400, fontWeight: focused ? 'bold' : 'normal' }}
              >
                Profile
              </Text>
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIconContainer}>
              <Feather name="settings" size={30} color={focused ? colors.chetwodeBlue900 : colors.chetwodeBlue400} />
              <Text
                variant="bodySmall"
                style={{ color: focused ? colors.chetwodeBlue900 : colors.chetwodeBlue400, fontWeight: focused ? 'bold' : 'normal' }}
              >
                Settings
              </Text>
            </View>
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
