import { StyleSheet } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 20,
    marginBottom: 15
  },
  title: {
    fontSize: responsiveFontSize(4.2),
    padding: 15
  }
});

export default styles;
