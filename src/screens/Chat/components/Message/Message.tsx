import { View } from 'react-native';
import { Text } from 'react-native-paper';

import styles from './Message.styles';

import type { IMessage, IUser } from '../../../../types';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../../store';

interface MessageProps {
  data: IMessage;
}

const Message = ({ data }: MessageProps) => {
  const user = useSelector<IRootState>(state => state.auth.user);

  const isSender = data.user.id === (user as IUser).id;

  return (
    <View style={[styles.container, isSender ? styles.senderContainer : styles.receiverContainer]}>
      <View style={[styles.infoContainer, isSender ? styles.senderInfoContainer : styles.receiverInfoContainer]}>
        <View style={styles.textContainer}>
          <Text variant="titleMedium">{data.user.username}</Text>
          <Text variant="labelMedium">{data.text}</Text>
        </View>
      </View>
    </View>
  );
};

export default Message;
