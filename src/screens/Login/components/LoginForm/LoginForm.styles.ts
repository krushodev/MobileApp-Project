import { StyleSheet } from 'react-native';

import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    gap: 25
  },
  inputsContainer: {
    padding: 20,
    gap: 25
  },
  input: {
    backgroundColor: colors.chetwodeBlue200
  },
  redirectContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 15,
    gap: 10
  },
  redirectText: {
    textAlign: 'center',
    fontSize: 15
  },
  redirectButton: {
    color: colors.chetwodeBlue700,
    fontWeight: 'bold'
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
