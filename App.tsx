import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { View } from 'react-native';

import AuthHandler from './src/utils/AuthHandler';

import { store } from './src/store';
import fonts from './src/global/fonts';

function App() {
  const [loaded] = useFonts(fonts);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <View style={{ flex: 1, marginTop: 30 }}>
        <NavigationContainer>
          <AuthHandler />
        </NavigationContainer>
      </View>
    </Provider>
  );
}

export default App;
