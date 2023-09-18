import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  modal: {
    zIndex: 20,
    alignItems: 'center'
  },
  contentContainerStyle: {
    height: '75%',
    width: '90%',
    justifyContent: 'flex-start',
    backgroundColor: 'whitesmoke',
    gap: 30,
    borderRadius: 20
  },
  modalTitle: {
    fontSize: 30,
    padding: 15,
    textAlign: 'center'
  },
  modalForm: {
    padding: 20,
    gap: 20,
    flex: 1
  },
  modalButton: {
    padding: 10,
    backgroundColor: '#c3c3c3',
    margin: 10
  }
});

export default styles;
