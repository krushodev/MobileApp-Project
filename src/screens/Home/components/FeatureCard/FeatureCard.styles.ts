import { StyleSheet } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    gap: 75,
    justifyContent: 'center'
  },
  textContainer: {
    alignItems: 'center'
  },
  featureText: {
    fontSize: responsiveFontSize(3)
  },
  usernameText: {
    color: colors.chetwodeBlue500
  }
});

export default styles;
