import { View } from "react-native";
import MessageListContainer from "../components/MessageListContainer";
import Title from "../components/Title";

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <Title />
      <MessageListContainer />
    </View>
  );
};

export default Home;
