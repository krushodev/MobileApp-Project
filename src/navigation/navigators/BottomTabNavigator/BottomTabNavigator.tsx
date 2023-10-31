import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

import { Home, Rooms, Settings, CreateRoom, Profile } from '../../../screens';

import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import { CustomTabButton } from '../../../components';

import { globalStyles } from '../../../../global.styles';
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
              <Feather name="home" size={responsiveFontSize(3.8)} color={focused ? colors.chetwodeBlue600 : colors.zinc400} />
              <Text
                style={[
                  focused ? globalStyles.textBold : globalStyles.textRegular,
                  styles.tabBarLabel,
                  {
                    color: focused ? colors.chetwodeBlue600 : colors.zinc400
                  }
                ]}
              >
                Inicio
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
              <Feather name="message-circle" size={responsiveFontSize(3.8)} color={focused ? colors.chetwodeBlue600 : colors.zinc400} />
              <Text
                style={[
                  focused ? globalStyles.textBold : globalStyles.textRegular,
                  styles.tabBarLabel,
                  {
                    color: focused ? colors.chetwodeBlue600 : colors.zinc400
                  }
                ]}
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
          tabBarIcon: () => <Feather name="plus" color="white" size={responsiveFontSize(4)} />,
          tabBarButton: props => <CustomTabButton {...props} />,
          tabBarStyle: {
            display: 'none'
          }
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIconContainer}>
              <Feather name="user" size={responsiveFontSize(3.8)} color={focused ? colors.chetwodeBlue600 : colors.zinc400} />
              <Text
                style={[
                  focused ? globalStyles.textBold : globalStyles.textRegular,
                  styles.tabBarLabel,
                  {
                    color: focused ? colors.chetwodeBlue600 : colors.zinc400
                  }
                ]}
              >
                Perfil
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
              <Feather name="settings" size={responsiveFontSize(3.8)} color={focused ? colors.chetwodeBlue600 : colors.zinc400} />
              <Text
                style={[
                  focused ? globalStyles.textBold : globalStyles.textRegular,
                  styles.tabBarLabel,
                  {
                    color: focused ? colors.chetwodeBlue600 : colors.zinc400
                  }
                ]}
              >
                Ajustes
              </Text>
            </View>
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
