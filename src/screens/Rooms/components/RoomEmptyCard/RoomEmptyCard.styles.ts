import { StyleSheet } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 25
  },
  imageContainer: {},
  text: {
    fontSize: responsiveFontSize(2.8)
  }
});

export default styles;
