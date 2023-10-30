import { useSelector } from 'react-redux';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import dayjs from 'dayjs';

import { View } from 'react-native';
import { Avatar, Text } from 'react-native-paper';

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

  const dateFormat = dayjs(data.date).format('hh:mm');

  return (
    <View style={[styles.container, isSender ? styles.senderContainer : styles.receiverContainer]}>
      <View style={[styles.imageContainer, isSender ? styles.senderImageContainer : styles.receiverImageContainer]}>
        <Avatar.Image source={{ uri: data.user.image }} size={responsiveFontSize(5)} />
      </View>
      <View style={[globalStyles.container, styles.infoContainer, isSender ? styles.senderInfoContainer : styles.receiverInfoContainer]}>
        <View style={globalStyles.container}>
          <Text style={[globalStyles.textRegular, isSender ? styles.senderName : styles.receiverName]}>{data.user.username}</Text>
          <Text style={[globalStyles.textRegular, isSender ? styles.senderText : styles.receiverText]}>{data.text}</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={[globalStyles.textRegular, styles.dateText, isSender ? styles.senderDateText : styles.receiverDateText]}>
            {dateFormat}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MessageCard;
