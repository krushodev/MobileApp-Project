import { View, Text, FlatList } from 'react-native';
import RoomCard from '../RoomCard/RoomCard';
import PasswordValidationModalContent from '../PasswordValidationModalContent/PasswordValidationModalContent';
import { Modal } from '../../../../components';

import { useModal } from '../../../../hooks/useModal';

import styles from './RoomsList.styles';

import type { IRoom } from '../../../../types';

interface RoomListProps {
  roomsList: IRoom[] | undefined;
}

const RoomsList = ({ roomsList }: RoomListProps) => {
  const { isVisible, showModal, hideModal } = useModal();
  return (
    <>
      <View style={styles.container}>
        {roomsList && roomsList.length > 0 ? (
          <FlatList
            data={roomsList}
            renderItem={({ item }) => <RoomCard item={item} showModal={showModal} />}
            keyExtractor={item => item.id}
          />
        ) : (
          <Text style={styles.textAlert}>No hay rooms</Text>
        )}
      </View>
      <Modal isVisible={isVisible} onClose={hideModal}>
        <PasswordValidationModalContent />
      </Modal>
    </>
  );
};

export default RoomsList;
