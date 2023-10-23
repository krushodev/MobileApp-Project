import { StyleSheet } from 'react-native';
import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    marginTop: '-12%',
    marginHorizontal: 15,
    borderRadius: 15,
    backgroundColor: colors.chetwodeBlue50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 15,
    shadowColor: colors.zinc950,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7
  },
  statContainer: {
    padding: 10,
    alignItems: 'center'
  },
  statData: {
    color: colors.chetwodeBlue600
  }
});

export default styles;
