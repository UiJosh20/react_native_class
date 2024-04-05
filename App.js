import {
  Image,
  Text,
  View,
  ImageBackground,
  ScrollView,
  Button,
} from "react-native";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "gray" }}>
      <ScrollView>
        <Navbar />
        <Home/>
        
      </ScrollView>
    </View>
  );
}
