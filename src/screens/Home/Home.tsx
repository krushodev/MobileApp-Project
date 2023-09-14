import { View } from "react-native";
import { Button } from "react-native-paper";

import { Title } from "../../components";

import styles from "./Home.styles";

const Home = () => {
  return (
    <View style={styles.container}>
      <Title />
      <Button mode="contained" style={styles.button}>
        Ingresar
      </Button>
    </View>
  );
};

export default Home;
