import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: colors.primary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7
  },
  button: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;
