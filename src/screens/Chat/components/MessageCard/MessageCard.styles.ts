import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';

import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    margin: 6
  },
  senderContainer: {
    alignItems: 'flex-end'
  },
  receiverContainer: {
    alignItems: 'flex-start'
  },
  infoContainer: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    gap: 12,
    width: responsiveWidth(57)
  },
  senderInfoContainer: {
    backgroundColor: colors.chetwodeBlue200,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 15
  },
  receiverInfoContainer: {
    backgroundColor: colors.chetwodeBlue900,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 15
  },
  senderName: {
    color: colors.chetwodeBlue600,
    fontSize: responsiveFontSize(2)
  },
  receiverName: {
    color: colors.chetwodeBlue400,
    fontSize: responsiveFontSize(2)
  },
  senderText: {
    color: colors.chetwodeBlue950,
    fontSize: responsiveFontSize(1.7)
  },
  receiverText: {
    color: colors.chetwodeBlue100,
    fontSize: responsiveFontSize(1.7)
  }
});

export default styles;
