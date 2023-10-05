import { StyleSheet } from 'react-native';

import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    zIndex: -10
  },
  textAlert: {
    fontSize: 25,
    textAlign: 'center',
    padding: 20
  }
});

export default styles;
