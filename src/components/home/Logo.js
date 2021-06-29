import React from "react";
import { View, Image, Text } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

export default function Logo({ logo, text }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={logo} resizeMode="contain" />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 24,
    alignSelf: "baseline",
    borderRadius: 14,
    marginRight: 16,

    borderColor: "#ccc",
    borderWidth: 0.5,
    elevation: 4,
  },
  image: {
    width: "32@s",
    height: "32@s",
    marginRight: 10,
  },
  text: {
    fontSize: "18@s",
    fontWeight: "600",
  },
});
