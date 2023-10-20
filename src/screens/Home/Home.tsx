import { View } from 'react-native';
import { Carousel, Title } from '../../components';
import FeatureCard from './components/FeatureCard/FeatureCard';

import features from '../../global/features';

import styles from './Home.styles';

const Home = () => {
  return (
    <View style={styles.container}>
      <Title title="Inicio" />
      <Carousel
        data={features}
        renderItem={({ item, index }) => (
          <View key={index}>
            <FeatureCard Image={item.Image} text={item.text} />
          </View>
        )}
        autoPlay={true}
      />
    </View>
  );
};

export default Home;
