import { StyleSheet } from 'react-native';

import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 20
  },
  formContainer: {
    flex: 1,
    justifyContent: 'space-between'
  },
  inputsContainer: {
    gap: 20
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
    gap: 15
  },
  topicsChipContainer: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap'
  },
  buttonsContainer: {
    gap: 15,
    marginBottom: '20%',
    borderRadius: 15
  },
  button: {
    padding: 8
  },
  buttonSubmit: {
    backgroundColor: colors.chetwodeBlue600
  },
  buttonCancel: {
    borderWidth: 0.3,
    borderColor: colors.chetwodeBlue600,
    backgroundColor: colors.chetwodeBlue200
  }
});

export default styles;
