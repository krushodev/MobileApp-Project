import { StyleSheet } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
    padding: 5,
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
    backgroundColor: colors.chetwodeBlue100,
    fontSize: responsiveFontSize(1.8)
  }
});

export default styles;
