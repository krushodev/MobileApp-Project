import { useState } from 'react';
import { View, TouchableOpacity, TextInput, GestureResponderEvent, Button } from 'react-native'

const MessageForm = ({ setMessagesList }: { setMessagesList: React.Dispatch<React.SetStateAction<string[]>> }) => {
  const [inputValue, setInputValue] = useState("");

  const handleClick: ((event: GestureResponderEvent) => void) | undefined = (e) => {
    setMessagesList((prev) => [...prev, inputValue]);
    setInputValue("");
  }

  return (
    <View>
        <TextInput onChangeText={setInputValue} value={inputValue}/>
        <TouchableOpacity onPress={handleClick}/>
    </View>
  )
}

export default MessageForm;