import { View } from 'react-native';
import { IconButton, Text } from 'react-native-paper';

import { globalStyles } from '../../../../../global.styles';
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
        <Text variant="titleMedium" style={globalStyles.textRegular}>
          {user.username}
        </Text>
      </View>
      <Text style={globalStyles.textRegular}>Online</Text>
    </View>
  );
};

export default MemberCard;
