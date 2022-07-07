import React, { useState } from "react";
import Home from "./screens/Home";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Text, View, StyleSheet } from "react-native";

// const getFonts = ()=>{
//   return Font.loadAsync({
//     'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
//     'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
//   });
// }

export default function App() {
  // const [fontsLoaded, setFontsLoaded] = useState(false);

  let [fontsLoaded] = useFonts({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
      <Home />
  );
}
