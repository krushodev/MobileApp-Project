import { StyleSheet } from 'react-native';
import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.chetwodeBlue200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    margin: 20,
    marginBottom: 5,
    borderRadius: 25
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7
  }
});

export default styles;
