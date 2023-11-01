import { StyleSheet } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.chetwodeBlue500,
    padding: responsiveFontSize(1.6),
    marginHorizontal: 20,
    borderRadius: 15,
    marginBottom: 15,
    zIndex: -10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  infoContainer: {
    gap: 3
  },
  roomNameText: {
    color: colors.chetwodeBlue100,
    fontSize: responsiveFontSize(2.5),
    marginBottom: 5
  },
  roomMembersText: {
    fontSize: responsiveFontSize(1.8),
    marginBottom: 5,
    paddingVertical: 2,
    borderRadius: 10,
    color: colors.chetwodeBlue200,
    backgroundColor: colors.chetwodeBlue800,
    width: '50%',
    textAlign: 'center'
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 2
  },
  chip: {
    paddingVertical: 4,
    paddingHorizontal: 7,
    backgroundColor: colors.chetwodeBlue300,
    color: colors.chetwodeBlue600,
    fontSize: responsiveFontSize(1.4),
    borderRadius: 10
  }
});

export default styles;
