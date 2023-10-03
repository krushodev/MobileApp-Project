import { useSelector } from 'react-redux';

import { Text } from 'react-native-paper';

import type { IRootState } from '../../store';
import type { IUser } from '../../types';

import styles from './Title.styles';

const Title = () => {
  const user = useSelector<IRootState>(state => state.auth.user);

  return (
    <Text variant="displaySmall" style={styles.title}>
      Bienvenido, {(user as IUser).username}
    </Text>
  );
};

export default Title;
