import { View, Text, StyleSheet } from "react-native";
import { IRoom } from "../../types";

import styles from "./RoomCard.styles";

const RoomCard = ({ item }: { item: IRoom }) => {
  return (
    <View style={styles.container}>
      <Text>{item.name}</Text>
    </View>
  );
};

export default RoomCard;
