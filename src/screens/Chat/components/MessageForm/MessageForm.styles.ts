import { StyleSheet } from 'react-native';

import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
    padding: 8,
    backgroundColor: colors.chetwodeBlue100
  },
  formContainer: {
    flex: 4,
    gap: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    borderRadius: 15,
    borderWidth: 0,
    backgroundColor: colors.chetwodeBlue100
  }
});

export default styles;
