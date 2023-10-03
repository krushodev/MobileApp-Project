import { Text } from 'react-native-paper';

import { AuthNavigator, StackNavigator } from '..';

import { useAuth } from '../../hooks/useAuth';

const MainNavigator = () => {
  const { loading, isAuthenticated } = useAuth();

  if (loading) {
    return <Text>Cargando...</Text>;
  }

  return isAuthenticated ? <StackNavigator /> : <AuthNavigator />;
};

export default MainNavigator;
