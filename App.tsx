import { useFonts, Roboto_400Regular, Roboto_300Light, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { MainNavigator } from './src/navigation';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootSiblingParent } from 'react-native-root-siblings';

import { store } from './src/store';

function App() {
  const [loaded] = useFonts({
    Roboto_400Regular,
    Roboto_300Light,
    Roboto_700Bold
  });

  const queryClient = new QueryClient();

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <RootSiblingParent>
            <NavigationContainer>
              <MainNavigator />
            </NavigationContainer>
          </RootSiblingParent>
        </SafeAreaProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
