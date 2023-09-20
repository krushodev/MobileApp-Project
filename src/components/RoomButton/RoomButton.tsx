import { useState } from 'react';
import { randomUUID } from 'expo-crypto';

import { FAB } from 'react-native-paper';

import RoomModal from '../RoomModal/RoomModal';

import type { IRoom } from '../../types';

import styles from './RoomButton.styles';
import colors from '../../constants/colors';

interface RoomButtonProps {
  setRoomsList: React.Dispatch<React.SetStateAction<IRoom[]>>;
}

const RoomButton = ({ setRoomsList }: RoomButtonProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const handleCreateRoom = () => {
    const newRoom: IRoom = {
      id: randomUUID(),
      name: inputValue,
      topics: ['topic1'],
      members: ['user']
    };

    setRoomsList(prev => [...prev, newRoom]);

    setInputValue('');

    hideModal();
  };

  return (
    <>
      <RoomModal
        handleCreateRoom={handleCreateRoom}
        hideModal={hideModal}
        inputValue={inputValue}
        setInputValue={setInputValue}
        isModalVisible={isModalVisible}
      />
      <FAB icon="plus" color={colors.secondary} style={styles.button} onPress={showModal} />
    </>
  );
};

export default RoomButton;
