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
    borderRadius: 20,
    gap: 12,
    flex: 1,
    width: '70%'
  },
  senderInfoContainer: {
    backgroundColor: colors.secondary
  },
  receiverInfoContainer: {
    backgroundColor: colors.tertiary
  },
  textContainer: {
    flex: 1
  }
});

export default styles;
