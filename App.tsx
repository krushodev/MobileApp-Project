import { View } from "react-native";

import Title from "./src/components/Title";
import MessageListContainer from "./src/components/MessageListContainer";

function App() {
  return (
    <View style={{flex:1}}>
      <Title/>
      <MessageListContainer/>
    </View>
  )
}

export default App;
