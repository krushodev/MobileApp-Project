import { registerRootComponent } from 'expo';
import { View } from "react-native";

import Title from "./src/components/Title";

function App() {
  return (
    <View>
      <Title/>
    </View>
  )
}

export default registerRootComponent(App);
