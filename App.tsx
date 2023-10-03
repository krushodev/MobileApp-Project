import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { View } from 'react-native';

import { MainNavigator } from './src/navigation';

import { store } from './src/store';

import fonts from './src/global/fonts';

function App() {
  const [loaded] = useFonts(fonts);

  const queryClient = new QueryClient();

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <View style={{ flex: 1, marginTop: 30 }}>
          <NavigationContainer>
            <MainNavigator />
          </NavigationContainer>
        </View>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
