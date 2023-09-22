import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';

import { StackNavigator } from './src/navigation';

import fonts from './src/global/fonts';

function App() {
  const [loaded] = useFonts(fonts);

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default App;
