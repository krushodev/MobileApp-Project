import { StyleSheet } from 'react-native';

import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: 20,
    marginBottom: 10,
    zIndex: -10
  },
  text: {
    fontSize: 20,
    color: colors.secondary
  }
});

export default styles;
