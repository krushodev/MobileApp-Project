import { useConnection } from '../../../../hooks/useConnection';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

import { View } from 'react-native';
import { Avatar, IconButton, Text } from 'react-native-paper';

import { globalStyles } from '../../../../../global.styles';
import styles from './MemberCard.styles';

import type { IUser } from '../../../../types';
import colors from '../../../../constants/colors';

interface MemberCardProps {
  user: IUser;
  isOwner: boolean;
}

const MemberCard = ({ user, isOwner }: MemberCardProps) => {
  const { connectedUsers } = useConnection();

  const isActive = connectedUsers.includes(user.id);

  return (
    <View style={styles.container}>
      <View style={styles.memberContainer}>
        <View>
          <Avatar.Image source={{ uri: user.image }} size={responsiveFontSize(5)} />
        </View>
        <View style={styles.memberInfoContainer}>
          <Text style={[globalStyles.textRegular, styles.memberInfoText]}>{user.username}</Text>
          {isOwner && <IconButton icon="crown" iconColor={colors.amber600} size={responsiveFontSize(3)} />}
        </View>
      </View>
      <IconButton icon="circle" iconColor={isActive ? colors.lime600 : colors.red600} size={responsiveFontSize(1.5)} />
    </View>
  );
};

export default MemberCard;
