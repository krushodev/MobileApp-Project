import { useNavigation } from '@react-navigation/native';

import { View, Image } from 'react-native';
import { Button } from 'react-native-paper';

import Logo from '../../assets/images/logo_small.png';

import { globalStyles } from '../../../global.styles';
import styles from './Welcome.styles';
import colors from '../../constants/colors';

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
        <Button textColor={colors.chetwodeBlue50} style={[styles.button, styles.buttonLogin]} onPress={() => navigate('Login')}>
          Login
        </Button>
        <Button textColor={colors.chetwodeBlue500} style={[styles.button, styles.buttonSignup]} onPress={() => navigate('Signup')}>
          Registrarse
        </Button>
      </View>
    </View>
  );
};

export default Welcome;
