import { View, FlatList } from 'react-native';
import MemberCard from '../MemberCard/MemberCard';

import styles from './DrawerChatContent.styles';

import type { IRoom } from '../../../../types';
import { Text } from 'react-native-paper';

interface DrawerChatContentProps {
  room: IRoom | undefined;
}

const DrawerChatContent = ({ room }: DrawerChatContentProps) => {
  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={styles.text}>
        Miembros
      </Text>
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
