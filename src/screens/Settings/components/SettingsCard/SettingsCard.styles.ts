import { StyleSheet } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.chetwodeBlue200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: responsiveFontSize(1.2),
    marginBottom: 25,
    borderRadius: 25
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7
  },
  infoText: {
    fontSize: responsiveFontSize(2.2)
  }
});

export default styles;
