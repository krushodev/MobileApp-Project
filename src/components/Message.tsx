import { View } from "react-native";
import { Text, Avatar } from "react-native-paper";
import { IMessage } from "../types";

const Message = ({ data }: { data: IMessage }) => {
  return (
    <View style={{ marginBottom: 30, flexDirection: "row", gap: 12, paddingVertical: 15, paddingHorizontal: 10, backgroundColor: "green" }}>
      <Avatar.Image size={35} source={{ uri: data.user.image }} />
      <View style={{ width: "80%" }}>
        <Text variant="titleLarge">{data.user.name}</Text>
        <Text variant="titleMedium">{data.text}</Text>
      </View>
    </View>
  );
};

export default Message;
