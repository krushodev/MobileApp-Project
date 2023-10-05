import { Text } from 'react-native-paper';

import AuthNavigator from './AuthNavigator/AuthNavigator';
import StackNavigator from './StackNavigator/StackNavigator';

import { useAuth } from '../../hooks/useAuth';

const MainNavigator = () => {
  const { loading, isAuthenticated } = useAuth();

  if (loading) {
    return <Text>Cargando...</Text>;
  }

  return isAuthenticated ? <StackNavigator /> : <AuthNavigator />;
};

export default MainNavigator;
