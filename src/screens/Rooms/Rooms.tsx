import { View } from "react-native";
import { RoomsListContainer } from "../../components";

import styles from "./Rooms.styles";

const Rooms = () => {
  return (
    <View style={styles.container}>
      <RoomsListContainer />
    </View>
  );
};

export default Rooms;
