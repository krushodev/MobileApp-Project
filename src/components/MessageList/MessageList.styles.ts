import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 2
  },
  listContainer: {
    backgroundColor: colors.primary,
    flex: 1
  },
  textAlert: {
    color: colors.secondary,
    padding: 20,
    textAlign: 'center'
  }
});

export default styles;
