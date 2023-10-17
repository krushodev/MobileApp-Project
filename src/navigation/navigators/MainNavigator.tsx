import { useAuth } from '../../hooks/useAuth';

import AuthNavigator from './AuthNavigator/AuthNavigator';
import StackNavigator from './StackNavigator/StackNavigator';

import { Loading } from '../../components';

const MainNavigator = () => {
  const { loading, isAuthenticated } = useAuth();

  if (loading) {
    return <Loading />;
  }

  return isAuthenticated ? <StackNavigator /> : <AuthNavigator />;
};

export default MainNavigator;
