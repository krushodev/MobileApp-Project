import { useFonts } from "expo-font";
import fonts from "./src/global/fonts";

import StackNavigator from "./src/navigation/StackNavigator";

function App() {
  const [loaded] = useFonts(fonts);

  if (!loaded) {
    return null;
  }

  return <StackNavigator />;
}

export default App;
