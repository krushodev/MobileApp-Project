import { StyleSheet } from 'react-native';
import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 75,
    justifyContent: 'center'
  },
  imageContainer: {},
  textContainer: {
    alignItems: 'center'
  },
  usernameText: {
    color: colors.chetwodeBlue500
  }
});

export default styles;
