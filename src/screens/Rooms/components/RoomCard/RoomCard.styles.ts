import { StyleSheet } from 'react-native';

import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.chetwodeBlue500,
    padding: 20,
    marginBottom: 10,
    zIndex: -10
  },
  text: {
    fontSize: 20,
    color: colors.chetwodeBlue100
  }
});

export default styles;
