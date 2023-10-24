import { useSelector } from 'react-redux';

import { View } from 'react-native';
import { Text } from 'react-native-paper';

import { globalStyles } from '../../../../../global.styles';
import styles from './MessageCard.styles';

import type { IMessage, IUser } from '../../../../types';
import type { IRootState } from '../../../../store';

interface MessageProps {
  data: IMessage;
}

const MessageCard = ({ data }: MessageProps) => {
  const user = useSelector<IRootState>(state => state.auth.user);

  const isSender = data.user.id === (user as IUser).id;

  return (
    <View style={[styles.container, isSender ? styles.senderContainer : styles.receiverContainer]}>
      <View style={[globalStyles.container, styles.infoContainer, isSender ? styles.senderInfoContainer : styles.receiverInfoContainer]}>
        <View style={globalStyles.container}>
          <Text style={[globalStyles.textRegular, isSender ? styles.senderName : styles.receiverName]}>{data.user.username}</Text>
          <Text style={[globalStyles.textRegular, isSender ? styles.senderText : styles.receiverText]}>{data.text}</Text>
        </View>
      </View>
    </View>
  );
};

export default MessageCard;
