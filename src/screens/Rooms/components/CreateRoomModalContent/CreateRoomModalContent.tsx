import { View, Text } from 'react-native';
import { Button, Switch, TextInput } from 'react-native-paper';

import styles from './CreateRoomModalContent.styles';

interface CreateRoomModalContentProps {
  handleCreateRoom: () => void;
  setInputValues: React.Dispatch<React.SetStateAction<{ name: string; password: string }>>;
  setIsSwitchOn: React.Dispatch<React.SetStateAction<boolean>>;
  isSwitchOn: boolean;
  inputValues: { name: string; password: string };
}

const CreateRoomModalContent = ({
  handleCreateRoom,
  setInputValues,
  setIsSwitchOn,
  isSwitchOn,
  inputValues
}: CreateRoomModalContentProps) => {
  return (
    <>
      <Text style={styles.title}>Crea tu Room</Text>
      <View style={styles.formContainer}>
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
      <Button style={styles.button} onPress={handleCreateRoom} disabled={inputValues.name === ''}>
        Crear
      </Button>
    </>
  );
};

export default CreateRoomModalContent;
