import { View } from "react-native";
import { Button } from "react-native-paper";

import { Title } from "../../components";

import styles from "./Home.styles";

const Home = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Title />
      <Button mode="contained" contentStyle={styles.button} onPress={() => navigation.navigate("Rooms")}>
        Ingresar
      </Button>
    </View>
  );
};

export default Home;
