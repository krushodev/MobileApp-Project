import { useFonts } from "expo-font";
import { Chat, Home } from "./src/screens";
import fonts from "./src/global/fonts";

function App() {
  const [loaded] = useFonts(fonts);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Home />
    </>
  );
}

export default App;
