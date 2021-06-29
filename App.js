import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, SafeAreaView, View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f3f5",
  },
});
