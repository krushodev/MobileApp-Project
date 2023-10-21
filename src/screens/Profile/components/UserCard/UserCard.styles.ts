import { StyleSheet } from 'react-native';

import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.chetwodeBlue500,
    marginTop: 70,
    margin: 15,
    padding: 15,
    gap: 10,
    alignItems: 'center',
    borderRadius: 15
  },
  image: {
    top: -50
  },
  infoContainer: {
    marginTop: -40,
    alignItems: 'center'
  },
  text: {
    color: colors.chetwodeBlue200
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default styles;
