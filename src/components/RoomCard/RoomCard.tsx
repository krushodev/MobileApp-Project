import { View, Text } from 'react-native'
import { IRoom } from '../../types';

const RoomCard = ({ item }: { item: IRoom }) => {
  return (
    <View>
      <Text>{item.name}</Text>
    </View>
  )
}

export default RoomCard;
