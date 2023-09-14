import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#ed9f9a",
    borderRadius: 20,
    margin: 10,
    gap: 8,
  },
  infoContainer: {
    flexDirection: "row",
    gap: 12,
    flex: 1,
  },
  textContainer: {
    flex: 1,
  },
});

export default styles;
