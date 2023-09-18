import { View } from 'react-native';
import { Button, Modal, Text, TextInput } from 'react-native-paper';

import styles from './RoomModal.styles';

interface RoomModalProps {
  isModalVisible: boolean;
  hideModal: () => void;
  handleCreateRoom: () => void;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  inputValue: string;
}

const RoomModal = ({ isModalVisible, hideModal, handleCreateRoom, inputValue, setInputValue }: RoomModalProps) => {
  return (
    <Modal
      visible={isModalVisible}
      onDismiss={hideModal}
      overlayAccessibilityLabel="Close"
      style={styles.modal}
      contentContainerStyle={styles.contentContainerStyle}
    >
      <Text style={styles.modalTitle}>Crea tu Room</Text>
      <View style={styles.modalForm}>
        <TextInput mode="outlined" label="Nombre" placeholder="Ingresa el nombre" onChangeText={setInputValue} />
      </View>
      <Button style={styles.modalButton} onPress={handleCreateRoom} disabled={inputValue === ''}>
        Crear
      </Button>
    </Modal>
  );
};

export default RoomModal;
