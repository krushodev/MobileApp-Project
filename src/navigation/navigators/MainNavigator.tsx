import AuthNavigator from './AuthNavigator/AuthNavigator';
import StackNavigator from './StackNavigator/StackNavigator';

import { useAuth } from '../../hooks/useAuth';
import Loading from '../../components/Loading/Loading';

const MainNavigator = () => {
  const { loading, isAuthenticated } = useAuth();

  if (loading) {
    return <Loading />;
  }

  return isAuthenticated ? <StackNavigator /> : <AuthNavigator />;
};

export default MainNavigator;
