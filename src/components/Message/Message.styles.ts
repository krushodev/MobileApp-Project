import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: colors.tertiary,
    borderRadius: 20,
    margin: 10,
    gap: 8
  },
  infoContainer: {
    flexDirection: 'row',
    gap: 12,
    flex: 1
  },
  textContainer: {
    flex: 1
  }
});

export default styles;
