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
  return (
    <View style={styles.container}>
      <View style={styles.memberContainer}>
        <IconButton icon="circle" iconColor="green" size={responsiveFontSize(1.5)} />
        <Text style={[globalStyles.textRegular, styles.text]}>{user.username}</Text>
      </View>
      <Text style={[globalStyles.textBold, styles.text]}>online</Text>
    </View>
  );
};

export default MemberCard;
