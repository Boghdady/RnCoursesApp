import React from "react";
import { View, ImageBackground, Text, Dimensions } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { menuItems } from "../home/data";
import { IconClose } from "../home/Icons";

import MenuItem from "./MenuItem";

const screenHeight = Dimensions.get("window").h;


export default function Menu(props) {
  return (
    <View style={styles.container}>
      <View style={styles.cover}>
        <ImageBackground
          source={require("../../assets/background1.jpg")}
          style={styles.coverImage}
        >
          <Text style={styles.coverText}>Ahmed Boghdady</Text>
          <Text style={styles.coverTitle}>a.boghdady@indexgroup.net</Text>
          <View style={styles.closeButton}>
            <IconClose />
          </View>
        </ImageBackground>
      </View>

      <View style={styles.content}>
        {menuItems.map((item, index) => (
          <MenuItem
            key={index.toString()}
            title={item.title}
            subtitle={item.subtitle}
            Icon={item.Icon}
          />
        ))}
      </View>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    backgroundColor: "#f0f3f5",
    width: "100%",
    height: "100%",
    zIndex: 100,
    position: "absolute",
  },
  cover: {
    height: "142@s",
    backgroundColor: "#000",
  },
  coverImage: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  coverText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: "20@s",
  },
  coverTitle: {
    color: "#C8C8C8",
    fontWeight: "400",
    fontSize: "12@s",
    marginTop: "8@vs",
  },
  closeButton: {
    width: "44@s",
    height: "44@s",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: "22@s",
    position: "absolute",
    bottom: "-22@s",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  content: {
    marginTop: "60@s",
    marginLeft: "30@s",
    height: screenHeight,
    width: "100%",
    backgroundColor: "#F0F3F5",
  },

});
