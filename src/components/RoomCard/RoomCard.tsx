import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { StackNavigation } from "../../navigation/types/types";
import { IRoom } from "../../types";

import styles from "./RoomCard.styles";

const RoomCard = ({ item }: { item: IRoom } ) => {

  const { navigate } = useNavigation<StackNavigation>();

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigate("Chat")}>
      <Text style={styles.text}>{item.name}</Text>
      <Text>Members: {item.members?.length} </Text>
    </TouchableOpacity>
  );
};

export default RoomCard;
