import { StyleSheet } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';

import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    zIndex: 50,
    alignItems: 'center'
  },
  content: {
    height: responsiveHeight(57),
    width: '90%',
    backgroundColor: colors.chetwodeBlue50,
    borderRadius: 20
  }
});

export default styles;
