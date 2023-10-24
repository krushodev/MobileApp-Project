import { StyleSheet } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

import colors from '../../constants/colors';

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: responsiveFontSize(2.2),
    borderRadius: 15
  },
  buttonPrimary: {
    backgroundColor: colors.chetwodeBlue500
  },
  buttonSecondary: {
    borderWidth: 0.5,
    borderColor: colors.chetwodeBlue500,
    backgroundColor: colors.chetwodeBlue200
  },
  text: {
    fontSize: responsiveFontSize(2)
  },
  textPrimary: {
    color: colors.chetwodeBlue50
  },
  textSecondary: {
    color: colors.chetwodeBlue500
  }
});

export default styles;
