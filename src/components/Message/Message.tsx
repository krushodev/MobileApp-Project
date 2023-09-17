import { View } from "react-native";
import { Text, Avatar, ToggleButton } from "react-native-paper";

import { IMessage } from "../../types";

import styles from "./Message.styles";
import colors from "../../constants/colors";

interface MessageProps {
  data: IMessage;
  setMessagesList: React.Dispatch<React.SetStateAction<IMessage[]>>;
}

const Message = ({ data, setMessagesList }: MessageProps) => {
  const handleClick = () => {
    setMessagesList((prev) => {
      const filter = prev.filter((item) => item.id !== data.id);

      return filter;
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Avatar.Image size={40} source={{ uri: data.user.image }} />
        <View style={styles.textContainer}>
          <Text variant="titleLarge">{data.user.name}</Text>
          <Text variant="titleMedium">{data.text}</Text>
        </View>
      </View>
      <ToggleButton size={35} onPress={handleClick} icon="delete" iconColor={colors.primary} />
    </View>
  );
};

export default Message;
