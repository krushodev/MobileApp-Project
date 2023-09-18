import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    right: 25,
    bottom: 30,
    padding: 8,
    zIndex: -10,
    backgroundColor: colors.primary
  }
});

export default styles;
