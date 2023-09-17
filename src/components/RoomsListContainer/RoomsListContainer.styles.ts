import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  list: {
    zIndex: -30,
  },
  text: {
    fontSize: 30,
  },
});

export default styles;
