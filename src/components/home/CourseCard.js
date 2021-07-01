import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

export default function CourseCard({
  title,
  subtitle,
  image,
  logo,
  author,
  avatar,
  caption,
}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.titleWrapper}>
        <Image style={styles.courseLogo} source={logo} resizeMode="contain" />
        <Text style={styles.numOfSections}>{subtitle}</Text>
        <Text style={styles.courseTitle}>{title}</Text>
      </View>
      <View style={styles.footerContainer}>
        <Image style={styles.footerImage} source={avatar} />
        <View style={{ flex: 1 }}>
          <Text style={styles.footerTitle}>{caption}</Text>
          <Text style={styles.footerSubtitle}>{`Taught by ${author}`}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    width: "320@s",
    height: "320@s",
    backgroundColor: "#fff",
    borderRadius: 14,
    marginRight: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  image: {
    height: "75%",
    width: "100%",
    borderTopRightRadius: 14,
    borderTopLeftRadius: 14,
  },
  titleWrapper: {
    position: "absolute",
    top: "60@s",
    left: "25@s",
    right: "25@s",
  },
  numOfSections: {
    color: "#fff",
    fontSize: "16@s",
    textTransform: "uppercase",
  },
  courseTitle: {
    color: "#fff",
    marginTop: 16,
    fontSize: "24@s",
    fontWeight: "bold",
  },
  courseLogo: {
    width: "36@s",
    height: "36@s",
    marginBottom: 20,
  },
  footerContainer: {
    flexDirection: "row",
    padding: "16@s",
  },
  footerImage: {
    width: "36@s",
    height: "36@s",
    borderRadius: "18@s",
    marginRight: 15,
  },
  footerTitle: {
    fontSize: "14@s",
    fontWeight: "600",
  },
  footerSubtitle: {
    marginTop: 10,
    color: "#b8bece",
  },
});
