import { useState } from 'react';
import { Text, FlatList, View } from 'react-native';
import MessageForm from './MessageForm';
import { StyleSheet } from "react-native";


const MessageContainer = () => {
  const [messagesList, setMessagesList] = useState<string[]>([]);

  return (
   <View>
    <View>
      {
        messagesList.length > 0 ? 
        <FlatList data={messagesList} renderItem={({item}) => <Text>{item}</Text>} keyExtractor={(item, index) => `${index}`} />
        :
        <Text>No hay mensajes</Text>
      } 
    </View>
    <MessageForm setMessagesList={setMessagesList}/>
   </View>
  )
}

export default MessageContainer