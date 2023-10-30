import { StyleSheet } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 18,
    paddingHorizontal: 15
  },
  text: {
    textAlign: 'center',
    fontSize: responsiveFontSize(2.8),
    marginBottom: 10
  },
  membersList: {
    marginBottom: 40
  }
});

export default styles;
