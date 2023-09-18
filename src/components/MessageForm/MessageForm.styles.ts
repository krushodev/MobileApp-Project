import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.secondary
  },
  input: {
    flex: 1,
    color: colors.primary,
    borderRadius: 15,
    paddingVertical: 5,
    borderColor: colors.primary
  }
});

export default styles;
