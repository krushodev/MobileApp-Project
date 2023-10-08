import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  formContainer: {
    gap: 12
  },
  inputsContainer: {
    padding: 20,
    gap: 25
  },
  privateSelectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  button: {
    backgroundColor: 'black',
    padding: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 30,
    marginVertical: 65,
    marginHorizontal: 30,
    borderRadius: 15
  }
});

export default styles;
