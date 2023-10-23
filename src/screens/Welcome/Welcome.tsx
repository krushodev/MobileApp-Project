import { useNavigation } from '@react-navigation/native';

import { View, Image } from 'react-native';
import { Button } from '../../components';

import Logo from '../../assets/images/logo_small.png';

import { globalStyles } from '../../../global.styles';
import styles from './Welcome.styles';

import type { StackNavigation } from '../../navigation/types';

const Welcome = () => {
  const { navigate } = useNavigation<StackNavigation>();

  return (
    <View style={globalStyles.container}>
      <View style={[globalStyles.container, styles.imageContainer]}>
        <Image
          source={Logo}
          style={{
            maxWidth: '100%'
          }}
          resizeMode="contain"
        />
      </View>
      <View style={[globalStyles.container, styles.buttonsContainer]}>
        <Button text="Iniciar sesión" type="primary" onPress={() => navigate('Login')} />
        <Button text="Registrarse" type="secondary" onPress={() => navigate('Signup')} />
      </View>
    </View>
  );
};

export default Welcome;
