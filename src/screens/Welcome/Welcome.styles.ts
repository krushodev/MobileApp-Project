import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  imageContainer: {
    maxWidth: '100%',
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
    justifyContent: 'center'
  },
  buttonsContainer: {
    padding: 10,
    justifyContent: 'center'
  },
  button: {
    backgroundColor: colors.chetwodeBlue500,
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 15,
    borderRadius: 15
  },
  buttonLogin: {
    backgroundColor: colors.chetwodeBlue600
  },
  buttonSignup: {
    borderWidth: 0.3,
    borderColor: colors.chetwodeBlue600,
    backgroundColor: colors.chetwodeBlue200
  }
});

export default styles;
