import { View, FlatList } from 'react-native';
import { Text } from 'react-native-paper';
import MemberCard from '../MemberCard/MemberCard';

import { globalStyles } from '../../../../../global.styles';
import styles from './DrawerChatContent.styles';

import type { IRoom } from '../../../../types';

interface DrawerChatContentProps {
  room: IRoom | undefined;
}

const DrawerChatContent = ({ room }: DrawerChatContentProps) => {
  return (
    <View style={globalStyles.container}>
      <Text style={[styles.text, globalStyles.textRegular]}>Miembros</Text>
      <FlatList
        style={styles.membersList}
        data={room?.members}
        renderItem={({ item }) => <MemberCard user={item.user} />}
        keyExtractor={item => item.user.id}
      />
    </View>
  );
};

export default DrawerChatContent;
