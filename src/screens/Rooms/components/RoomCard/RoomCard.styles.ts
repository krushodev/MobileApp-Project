import { StyleSheet } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.chetwodeBlue500,
    padding: responsiveFontSize(3),
    marginHorizontal: 20,
    borderRadius: 15,
    marginBottom: 15,
    zIndex: -10,
    gap: 5
  },
  roomNameText: {
    color: colors.chetwodeBlue100,
    fontSize: responsiveFontSize(2.5)
  },
  roomInfoText: {
    fontSize: responsiveFontSize(1.8)
  }
});

export default styles;
