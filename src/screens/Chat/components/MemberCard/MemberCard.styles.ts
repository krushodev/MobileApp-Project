import { StyleSheet } from 'react-native';

import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.chetwodeBlue200,
    paddingVertical: 8,
    paddingHorizontal: 15,
    margin: 10,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  memberContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default styles;
