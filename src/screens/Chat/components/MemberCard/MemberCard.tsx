import { useConnection } from '../../../../hooks/useConnection';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

import { View } from 'react-native';
import { IconButton, Text } from 'react-native-paper';

import { globalStyles } from '../../../../../global.styles';
import styles from './MemberCard.styles';

import type { IUser } from '../../../../types';

interface MemberCardProps {
  user: IUser;
}

const MemberCard = ({ user }: MemberCardProps) => {
  const { connectedUsers } = useConnection();

  const isActive = connectedUsers.includes(user.id);

  return (
    <View style={styles.container}>
      <View style={styles.memberContainer}>
        <IconButton icon="circle" iconColor={isActive ? 'green' : 'red'} size={responsiveFontSize(1.5)} />
        <Text style={[globalStyles.textRegular, styles.text]}>{user.username}</Text>
      </View>
      <Text style={[globalStyles.textBold, styles.text]}>{isActive ? 'en línea' : 'ausente'}</Text>
    </View>
  );
};

export default MemberCard;
