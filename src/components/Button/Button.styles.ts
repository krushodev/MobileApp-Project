import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 15
  },
  buttonPrimary: {
    backgroundColor: colors.chetwodeBlue600
  },
  buttonSecondary: {
    borderWidth: 0.5,
    borderColor: colors.chetwodeBlue600,
    backgroundColor: colors.chetwodeBlue200
  },
  contentPrimary: {
    color: colors.chetwodeBlue50
  },
  contentSecondary: {
    color: colors.chetwodeBlue600
  }
});

export default styles;
