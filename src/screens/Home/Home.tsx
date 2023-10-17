import { useNavigation } from '@react-navigation/native';

import { StackNavigation } from '../../navigation/types';

import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { Title } from '../../components';

import styles from './Home.styles';

const Home = () => {
  const { navigate } = useNavigation<StackNavigation>();

  return (
    <View style={styles.container}>
      <Title title="Home" />
    </View>
  );
};

export default Home;
