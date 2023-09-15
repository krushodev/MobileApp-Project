import { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, FAB, Modal, Portal, Text, PaperProvider } from "react-native-paper";

import { IRoom } from "../../types";

import RoomModal from "../RoomModal/RoomModal";

import styles from "./RoomButton.styles";

interface RoomButtonProps {
  setRoomsList: React.Dispatch<React.SetStateAction<IRoom[]>>;
}

const RoomButton = ({ setRoomsList }: RoomButtonProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);
  const hideModal = () => setIsModalVisible(false);

  const handleCreateRoom = () => {
    const newRoom: IRoom = {
      id: "kdjfkdjfkd",
      name: "Nueva room",
      tags: ["nose"],
      participants: ["jdkfjdjf"],
    };

    setRoomsList((prev) => [...prev, newRoom]);

    hideModal();
  };

  return (
    <>
      <RoomModal handleCreateRoom={handleCreateRoom} hideModal={hideModal} isModalVisible={isModalVisible} />
      <FAB icon="plus" style={styles.button} onPress={showModal} />
    </>
  );
};

export default RoomButton;
