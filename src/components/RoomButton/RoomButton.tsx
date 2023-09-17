import { useState } from "react";
import { FAB } from "react-native-paper";

import { IRoom } from "../../types";

import RoomModal from "../RoomModal/RoomModal";

import styles from "./RoomButton.styles";
import { randomUUID } from "expo-crypto";

interface RoomButtonProps {
  setRoomsList: React.Dispatch<React.SetStateAction<IRoom[]>>;
}

const RoomButton = ({ setRoomsList }: RoomButtonProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const showModal = () => setIsModalVisible(true);
  const hideModal = () => setIsModalVisible(false);

  const handleCreateRoom = () => {
    const newRoom: IRoom = {
      id: randomUUID(),
      name: inputValue,
      tags: ["nose"],
      members: ["jdkfjdjf"],
    };

    setRoomsList((prev) => [...prev, newRoom]);

    hideModal();
  };

  return (
    <>
      <RoomModal handleCreateRoom={handleCreateRoom} hideModal={hideModal} setInputValue={setInputValue} isModalVisible={isModalVisible} />
      <FAB icon="plus" style={styles.button} onPress={showModal} />
    </>
  );
};

export default RoomButton;
