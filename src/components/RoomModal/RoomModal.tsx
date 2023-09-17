import React from "react";
import { Button, Modal, Text, TextInput } from "react-native-paper";

import styles from "./RoomModal.styles";
import { View } from "react-native";

interface RoomModalProps {
  isModalVisible: boolean;
  hideModal: () => void;
  handleCreateRoom: () => void;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const RoomModal = ({ isModalVisible, hideModal, handleCreateRoom, setInputValue }: RoomModalProps) => {

  return (
    <Modal visible={isModalVisible} onDismiss={hideModal} overlayAccessibilityLabel="Close" style={styles.modal} contentContainerStyle={styles.contentContainerStyle}>
      <Text style={styles.modalTitle}>Crea tu Room</Text>
      <View style={styles.modalForm}>
        <TextInput mode="outlined" label="Nombre" placeholder="Ingresa el nombre" onChangeText={setInputValue}/>
      </View>
      <Button style={styles.modalButton} onPress={handleCreateRoom}>Crear</Button>
    </Modal>
  );
};

export default RoomModal;
