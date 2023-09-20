import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.secondary,
    margin: 15,
    padding: 15,
    gap: 15,
    alignItems: 'center',
    borderRadius: 15
  }
});

export default styles;
