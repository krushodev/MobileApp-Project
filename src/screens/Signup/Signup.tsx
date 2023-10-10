import { useNavigation } from '@react-navigation/native';
import { randomUUID } from 'expo-crypto';

import SignupForm from './components/SignupForm/SignupForm';

import { signup } from '../../api/routes/authRoutes';

import type { StackNavigation } from '../../navigation/types';

const Signup = () => {
  const { navigate } = useNavigation<StackNavigation>();

  const handleSubmit = async (values: { username: string; email: string; password: string }) => {
    const result = await signup({ id: randomUUID(), image: `https://ui-avatars.com/api/?name=${values.username}`, ...values });

    if (!result) return;

    navigate('Login');
  };

  return <SignupForm handleSubmit={handleSubmit} />;
};

export default Signup;
