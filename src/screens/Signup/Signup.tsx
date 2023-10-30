import { useNavigation } from '@react-navigation/native';
import { randomUUID } from 'expo-crypto';

import SignupForm from './components/SignupForm/SignupForm';

import { signup } from '../../api/routes/authRoutes';
import { showToast } from '../../helper/toast';
import avatar from '../../global/avatar';

import type { StackNavigation } from '../../navigation/types';

const Signup = () => {
  const { navigate } = useNavigation<StackNavigation>();

  const handleSubmit = async (values: { username: string; email: string; password: string }) => {
    const result = await signup({ id: randomUUID(), image: `data:image/jpeg;base64,${avatar.default}`, rooms: [], ...values });

    if (!result) return;

    showToast({ message: 'Registro exitoso', type: 'success' });

    navigate('Login');
  };

  return <SignupForm handleSubmit={handleSubmit} />;
};

export default Signup;
