import { useSelector } from 'react-redux';

import { LoginNavigator, StackNavigator } from '../navigation';

import { IRootState } from '../store';

const AuthHandler = () => {
  const user = useSelector<IRootState>(state => state.user.user);

  return user ? <StackNavigator /> : <LoginNavigator />;
};

export default AuthHandler;
