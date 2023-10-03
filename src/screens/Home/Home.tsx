import { View } from 'react-native';
import { Button } from 'react-native-paper';

import { Title } from '../../components';

import styles from './Home.styles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigation } from '../../navigation/types';

const Home = () => {
  const { navigate } = useNavigation<StackNavigation>();

  return (
    <View style={styles.container}>
      <Title />
      <Button mode="contained" contentStyle={styles.button} onPress={() => navigate('Rooms')}>
        Ingresar
      </Button>
    </View>
  );
};

export default Home;
