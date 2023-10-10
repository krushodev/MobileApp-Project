import { StyleSheet } from 'react-native';

import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    gap: 15,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  input: {
    flex: 1,
    color: colors.primary,
    paddingVertical: 3,
    borderRadius: 15,
    borderWidth: 0
  }
});

export default styles;
