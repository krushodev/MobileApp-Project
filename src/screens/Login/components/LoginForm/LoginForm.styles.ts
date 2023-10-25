import { StyleSheet } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  formContainer: {
    justifyContent: 'center',
    gap: 25
  },
  inputsContainer: {
    gap: 7,
    marginBottom: 5
  },
  input: {
    backgroundColor: colors.chetwodeBlue200,
    fontSize: responsiveFontSize(2)
  },
  redirectContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 15,
    gap: 10
  },
  text: {
    fontSize: responsiveFontSize(2)
  },
  redirectText: {
    textAlign: 'center'
  },
  redirectButtonText: {
    color: colors.chetwodeBlue700
  },
  button: {
    backgroundColor: colors.chetwodeBlue500,
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
    margin: 20,
    borderRadius: 15
  }
});

export default styles;
