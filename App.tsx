import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';

import HomeNavigator from './src/navigation/HomeNavigator';

import fonts from './src/global/fonts';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';

function App() {
  const [loaded] = useFonts(fonts);

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
}

export default App;
