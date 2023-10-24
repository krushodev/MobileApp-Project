import { StyleSheet } from 'react-native';

import colors from '../../../../constants/colors';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: colors.chetwodeBlue500,
    paddingBottom: 30,
    gap: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContainer: {
    padding: 5
  },
  imageIconButton: {
    backgroundColor: colors.chetwodeBlue800,
    position: 'absolute',
    bottom: 0,
    right: 0
  },
  infoContainer: {
    alignItems: 'center'
  },
  usernameText: {
    color: colors.chetwodeBlue200,
    fontSize: responsiveFontSize(4.5)
  },
  emailText: {
    color: colors.chetwodeBlue200,
    fontSize: responsiveFontSize(2)
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default styles;
