// @ts-nocheck

import { View } from 'react-native';
import { Text, Avatar, ToggleButton } from 'react-native-paper';

import type { IMessage, IUser } from '../../types';

import styles from './Message.styles';
import colors from '../../constants/colors';

interface MessageProps {
  data: IMessage;
}

const Message = ({ data }: MessageProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        {/* <Avatar.Image size={40} source={{ uri: data.user.image }} /> */}
        <View style={styles.textContainer}>
          <Text variant="titleLarge">{data.user.username}</Text>
          <Text variant="titleMedium">{data.text}</Text>
        </View>
      </View>
      {/* <ToggleButton size={35} onPress={handleClick} icon="delete" iconColor={colors.primary} /> */}
    </View>
  );
};

export default Message;
