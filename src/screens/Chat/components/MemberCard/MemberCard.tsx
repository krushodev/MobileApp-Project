import { View } from 'react-native';
import { IconButton, Text } from 'react-native-paper';

import styles from './MemberCard.styles';

import type { IUser } from '../../../../types';

interface MemberCardProps {
  user: IUser;
}

const MemberCard = ({ user }: MemberCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.memberContainer}>
        <IconButton icon="circle" iconColor="green" size={10} />
        <Text variant="titleMedium">{user.username}</Text>
      </View>
      <Text>Online</Text>
    </View>
  );
};

export default MemberCard;
