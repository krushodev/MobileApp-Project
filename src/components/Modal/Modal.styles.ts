import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    zIndex: 50,
    alignItems: 'center'
  },
  content: {
    maxHeight: 340,
    width: '90%',
    justifyContent: 'flex-start',
    backgroundColor: colors.chetwodeBlue50,
    gap: 30,
    borderRadius: 20
  }
});

export default styles;
