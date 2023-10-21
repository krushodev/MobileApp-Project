import { StyleSheet } from 'react-native';

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
    width: '70%'
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
    color: colors.chetwodeBlue600
  },
  receiverName: {
    color: colors.chetwodeBlue400
  },
  senderText: {
    color: colors.chetwodeBlue950
  },
  receiverText: {
    color: colors.chetwodeBlue100
  }
});

export default styles;
