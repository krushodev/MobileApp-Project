import { StyleSheet } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: responsiveFontSize(2.8),
    margin: 15,
    marginBottom: 5
  },
  membersList: {
    margin: 15
  }
});

export default styles;
