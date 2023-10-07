import { View, Text, FlatList } from 'react-native';
import { IRoom } from '../../../../types';

interface DrawerChatContentProps {
  room: IRoom | undefined;
}

const DrawerChatContent = ({ room }: DrawerChatContentProps) => {
  return (
    <View>
      <FlatList data={room?.members} renderItem={({ item }) => <Text>{item.user.username}</Text>} keyExtractor={item => item.user.id} />
    </View>
  );
};

export default DrawerChatContent;
