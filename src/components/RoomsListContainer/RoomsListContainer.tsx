import { useState } from "react";
import { View, Text, FlatList } from "react-native";

import RoomButton from "../RoomButton/RoomButton";
import RoomCard from "../RoomCard/RoomCard";

import { IRoom } from "../../types";

import styles from "./RoomsListContainer.styles";

const RoomsListContainer = () => {
  const [roomsList, setRoomsList] = useState<IRoom[]>([]);

  return (
    <View style={styles.container}>
      {roomsList.length > 0 ? (
        <FlatList style={styles.list} data={roomsList} renderItem={({ item }) => <RoomCard item={item} />} keyExtractor={(item) => item.id} />
      ) : (
        <Text style={styles.textAlert}>No hay rooms</Text>
      )}
      <RoomButton setRoomsList={setRoomsList} />
    </View>
  );
};

export default RoomsListContainer;
