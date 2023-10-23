import { StyleSheet } from 'react-native';

import colors from '../../../../constants/colors';

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
  text: {
    color: colors.chetwodeBlue200
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default styles;
