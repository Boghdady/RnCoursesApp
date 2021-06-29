import React from "react";
import { View, Text, Image } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

export default function Card({ title, image, logo, caption, subtitle }) {
  const splitTitle = title.split(" ");

  return (
    <View style={styles.container}>
      <Image style={styles.cardImage} source={image} />
      <Text style={styles.cardTitle}>{title}</Text>
      <View style={styles.cardFooter}>
        <Image style={styles.cardFooterImage} source={logo} />
        <View style={styles.footerTitleContainer}>
          <Text style={styles.cardFooterTitle}>{caption}</Text>
          <Text style={styles.cardFooterSubTitle}>{subtitle}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "295@s",
    height: "280@s",
    borderRadius: 14,
    overflow: "hidden",
    marginRight: 20,
    marginBottom: 20,

    borderColor: "#ccc",
    borderWidth: 0.5,
    elevation: 4,
  },
  cardImage: {
    width: "100%",
    height: "70%",
  },
  cardTitle: {
    fontSize: "24@s",
    fontWeight: "bold",
    color: "#fff",
    position: "absolute",
    top: "20@s",
    left: "25@s",
    right: "25@s",
  },

  cardFooter: {
    flexDirection: "row",
    paddingTop: "15@vs",
  },
  cardFooterImage: {
    height: "44@s",
    width: "44@s",
    borderRadius: "22@s",
    marginLeft: 10,
  },
  footerTitleContainer: {
    marginLeft: 15,
  },
  cardFooterTitle: {
    fontSize: "20@s",
  },
  cardFooterSubTitle: {
    color: "#3c4560",
    fontSize: "12@s",
    textTransform: "uppercase",
  },
});
