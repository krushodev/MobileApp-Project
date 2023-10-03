import { View } from 'react-native';
import { Text } from 'react-native-paper';

import type { IMessage } from '../../types';

import styles from './Message.styles';
import colors from '../../constants/colors';

interface MessageProps {
  data: IMessage;
}

const Message = ({ data }: MessageProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.textContainer}>
          <Text variant="titleLarge">{data.user.username}</Text>
          <Text variant="titleMedium">{data.text}</Text>
        </View>
      </View>
    </View>
  );
};

export default Message;
