import { Image, View } from 'react-native';
import { Title } from '../../components';
import HomeCard from './components/HomeCard/HomeCard';

import styles from './Home.styles';

const Home = () => {
  return (
    <View style={styles.container}>
      <Title title="Inicio" />
      <HomeCard />
    </View>
  );
};

export default Home;
