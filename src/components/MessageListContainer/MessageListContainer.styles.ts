import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    backgroundColor: colors.primary,
    flex: 12,
  },
  textAlert: {
    padding: 20,
    textAlign: "center",
  },
});

export default styles;
