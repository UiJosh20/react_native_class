import {
  Image,
  Text,
  View,
  ImageBackground,
  ScrollView,
  Button,
  StatusBar
} from "react-native";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { useState } from "react";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  const [statusBar, setStatusBar] = useState(false)
  return (
    <View style={{ flex: 1, backgroundColor: "gray" }}>
      <StatusBar backgroundColor="lightgreen" barStyle="dark-content" hidden={statusBar}/> 
      <ScrollView>
        <Navbar />
        <Home setStatusBar={statusBar}/>
        <Button  title="hide status bar" onPress={()=> setStatusBar(true)} /> 
        
      </ScrollView>
    </View>
  );
}
