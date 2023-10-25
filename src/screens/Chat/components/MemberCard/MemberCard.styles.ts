import { StyleSheet } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.chetwodeBlue200,
    paddingVertical: 8,
    paddingHorizontal: 12,
    margin: 10,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  memberContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontSize: responsiveFontSize(1.8)
  }
});

export default styles;
