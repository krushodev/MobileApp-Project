import { View, Text } from 'react-native'
import React from 'react'
import { Button, Modal, PaperProvider, Portal } from 'react-native-paper';

interface RoomModalProps {
    isModalVisible: boolean;
    hideModal: () => void;
    handleCreateRoom: () => void;
}

const RoomModal = ({ isModalVisible, hideModal, handleCreateRoom }: RoomModalProps) => {
  return (
    <PaperProvider>
        <Portal>
          <Modal visible={isModalVisible} onDismiss={hideModal}>
            <Button mode="outlined" style={{padding: 20, backgroundColor: "black"}} onPress={handleCreateRoom}>Crear</Button>
          </Modal>
        </Portal>
    </PaperProvider>
  )
}

export default RoomModal;
