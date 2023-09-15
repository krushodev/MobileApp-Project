import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Button, Modal, PaperProvider, Portal } from "react-native-paper";

import styles from "./RoomModal.styles";

interface RoomModalProps {
  isModalVisible: boolean;
  hideModal: () => void;
  handleCreateRoom: () => void;
}

const RoomModal = ({ isModalVisible, hideModal, handleCreateRoom }: RoomModalProps) => {
  return (
    <Modal visible={isModalVisible} onDismiss={hideModal} overlayAccessibilityLabel="Close" style={styles.modal} contentContainerStyle={styles.contentContainerStyle}>
      <Button mode="outlined" style={styles.button} onPress={handleCreateRoom}>
        Crear
      </Button>
    </Modal>
  );
};

export default RoomModal;
