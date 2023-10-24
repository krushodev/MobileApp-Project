import { StyleSheet } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    marginTop: responsiveFontSize(-7),
    marginHorizontal: 15,
    borderRadius: 15,
    backgroundColor: colors.chetwodeBlue50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 15,
    shadowColor: colors.zinc950,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7
  },
  statContainer: {
    padding: 10,
    alignItems: 'center',
    gap: 8
  },
  statName: {
    fontSize: responsiveFontSize(2.2)
  },
  statData: {
    color: colors.chetwodeBlue600,
    fontSize: responsiveFontSize(2.2)
  }
});

export default styles;
