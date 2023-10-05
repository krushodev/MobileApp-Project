import { View } from 'react-native';
import { Button, Modal, Switch, Text, TextInput } from 'react-native-paper';

import styles from './RoomModal.styles';

interface RoomModalProps {
  isModalVisible: boolean;
  hideModal: () => void;
  handleCreateRoom: () => void;
  setInputValues: React.Dispatch<React.SetStateAction<{ name: string; password: string }>>;
  setIsSwitchOn: React.Dispatch<React.SetStateAction<boolean>>;
  isSwitchOn: boolean;
  inputValues: { name: string; password: string };
}

const RoomModal = ({
  isModalVisible,
  hideModal,
  handleCreateRoom,
  inputValues,
  setInputValues,
  setIsSwitchOn,
  isSwitchOn
}: RoomModalProps) => {
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
        <TextInput
          mode="outlined"
          label="Nombre"
          placeholder="Ingresa el nombre"
          onChangeText={e => setInputValues(prev => ({ ...prev, name: e }))}
        />
        <Switch value={isSwitchOn} onValueChange={() => setIsSwitchOn(!isSwitchOn)}></Switch>
        <TextInput
          mode="outlined"
          label="Contraseña"
          placeholder="Ingresa la contraseña"
          onChangeText={e => setInputValues(prev => ({ ...prev, password: e }))}
          disabled={!isSwitchOn}
        />
      </View>
      <Button style={styles.modalButton} onPress={handleCreateRoom} disabled={inputValues.name === ''}>
        Crear
      </Button>
    </Modal>
  );
};

export default RoomModal;
