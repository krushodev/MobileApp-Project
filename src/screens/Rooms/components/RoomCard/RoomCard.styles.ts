import { StyleSheet } from 'react-native';

import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.chetwodeBlue500,
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 15,
    marginBottom: 15,
    zIndex: -10
  },
  text: {
    color: colors.chetwodeBlue100
  }
});

export default styles;
