import { StyleSheet } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
    margin: 6,
    padding: 2,
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 4
  },
  imageContainer: {
    marginBottom: responsiveFontSize(-1.5)
  },
  senderImageContainer: {
    display: 'none'
  },
  receiverImageContainer: {},
  senderContainer: {
    justifyContent: 'flex-end'
  },
  receiverContainer: {
    justifyContent: 'flex-start'
  },
  infoContainer: {
    paddingTop: 8,
    paddingBottom: 20,
    paddingHorizontal: 12,
    maxWidth: '65%'
  },
  dateContainer: {
    position: 'absolute',
    right: 15,
    bottom: 5
  },
  dateText: {
    fontSize: responsiveFontSize(1.3)
  },
  senderDateText: {
    color: colors.chetwodeBlue600
  },
  receiverDateText: {
    color: colors.chetwodeBlue300
  },
  senderInfoContainer: {
    backgroundColor: colors.chetwodeBlue200,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 3
  },
  receiverInfoContainer: {
    backgroundColor: colors.chetwodeBlue900,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 3
  },
  senderName: {
    display: 'none'
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
