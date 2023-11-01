import { StyleSheet } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.chetwodeBlue200,
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  memberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  memberInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  memberInfoText: {
    fontSize: responsiveFontSize(1.8)
  }
});

export default styles;
