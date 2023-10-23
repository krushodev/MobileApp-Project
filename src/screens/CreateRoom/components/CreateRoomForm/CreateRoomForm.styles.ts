import { StyleSheet } from 'react-native';

import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 20
  },
  formContainer: {
    justifyContent: 'space-between'
  },
  inputsContainer: {
    gap: 5
  },
  input: {
    backgroundColor: colors.chetwodeBlue200
  },
  privateSelectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  topicsContainer: {
    gap: 20
  },
  topicsChipContainer: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap'
  },
  buttonsContainer: {
    gap: 15,
    marginBottom: '25%'
  }
});

export default styles;
