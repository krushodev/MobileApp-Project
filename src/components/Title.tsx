import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";

const Title = () => {
  return (
    <Text variant="displaySmall" style={styles.title}>
      VoxChat - App
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    marginTop: 40,
    marginBottom: 30,
    padding: 15,
  },
});

export default Title;
