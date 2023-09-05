import { StyleSheet, View } from "react-native";
import { Text, Avatar, ToggleButton } from "react-native-paper";
import { IMessage } from "../types";

const Message = ({ data, setMessagesList }: { data: IMessage, setMessagesList: React.Dispatch<React.SetStateAction<IMessage[]>> }) => {

  const handleClick = () => {
    setMessagesList((prev) => {
      const filter = prev.filter((item) => item.id !== data.id);

      return filter
    });
  }

  return (
    <View style={sytles.container}>
      <View style={sytles.infoContainer}>
        <Avatar.Image size={40} source={{ uri: data.user.image }} />
        <View style={sytles.textContainer}>
          <Text variant="titleLarge">{data.user.name}</Text>
          <Text variant="titleMedium">{data.text}</Text>
        </View>
      </View>
      <ToggleButton size={35} onPress={handleClick} icon="delete" iconColor="#8780b0"/>
    </View>
  );
};

const sytles = StyleSheet.create({
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
    flex: 1
  }
});

export default Message;
