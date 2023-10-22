import { StyleSheet } from 'react-native';

import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    height: '100%'
  },
  title: {
    padding: 15,
    textAlign: 'center'
  },
  formContainer: {
    padding: 20,
    gap: 20,
    justifyContent: 'space-evenly'
  },
  input: {
    backgroundColor: colors.chetwodeBlue200
  },
  button: {
    padding: 10,
    backgroundColor: '#c3c3c3',
    margin: 10
  }
});

export default styles;
