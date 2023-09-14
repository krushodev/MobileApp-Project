import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Chat, Home } from '../screens';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
   return(
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Chat" component={Chat}/>
         </Stack.Navigator>
      </NavigationContainer>
   )
}

export default StackNavigator;
