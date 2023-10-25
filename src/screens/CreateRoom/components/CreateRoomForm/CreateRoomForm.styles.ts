import { StyleSheet } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginHorizontal: 20,
    justifyContent: 'space-between'
  },
  inputsContainer: {
    gap: 2
  },
  input: {
    backgroundColor: colors.chetwodeBlue200,
    fontSize: responsiveFontSize(2)
  },
  privateSelectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  privateSelectText: {
    fontSize: responsiveFontSize(2)
  },
  topicsContainer: {
    gap: 20
  },
  topicText: {
    fontSize: responsiveFontSize(2)
  },
  topicsChipContainer: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap'
  },
  chipText: {
    fontSize: responsiveFontSize(1.7)
  },
  buttonsContainer: {
    gap: 15,
    marginVertical: 40
  }
});

export default styles;
