import { StyleSheet } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    height: '100%'
  },
  title: {
    padding: 30,
    textAlign: 'center',
    fontSize: responsiveFontSize(3)
  },
  formContainer: {
    padding: 20,
    gap: 25,
    justifyContent: 'space-evenly'
  },
  input: {
    backgroundColor: colors.chetwodeBlue200,
    fontSize: responsiveFontSize(2)
  },
  buttonsContainer: {
    gap: 12
  }
});

export default styles;
