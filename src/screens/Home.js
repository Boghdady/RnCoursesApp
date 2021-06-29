import React from "react";
import { View, Text, Image, ScrollView, SafeAreaView } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import Logo from "../components/home/Logo";
import Card from "../components/home/Card";

import { courses, logos } from "../components/home/data";
import { NotificationIcon } from "../components/home/Icons";

function TitleBarSection() {
  return (
    <View style={styles.titleBar}>
      <Image source={require("../assets/avatar.jpg")} style={styles.image} />
      <View style={styles.titleBarMiddleContent}>
        <Text style={styles.title}>Welcome back,</Text>
        <Text style={styles.name}>Ahmed</Text>
      </View>
      <NotificationIcon style={styles.notificationIcon} />
    </View>
  );
}

function ContinueLearningSection() {
  return (
    <View>
      <Text style={styles.learningSectionTitle}>Continue Learning</Text>
      <ScrollView
        style={styles.scrollView}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {courses.map((course) => (
          <Card
            key={course.id}
            title={course.title}
            image={course.image}
            logo={course.logo}
            caption={course.caption}
            subtitle={course.subtitle}
          />
        ))}
      </ScrollView>
    </View>
  );
}

function LogosSection() {
  return (
    <ScrollView
      style={styles.logosSection}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {logos.map((logo, index) => (
        <Logo key={index} logo={logo.logo} text={logo.text} />
      ))}
    </ScrollView>
  );
}

export default function Home(props) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <TitleBarSection />
          <LogosSection />
          <ContinueLearningSection />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f3f5",
  },
  titleBar: {
    flexDirection: "row",
  },
  titleBarMiddleContent: {
    flexDirection: "column",
    marginLeft: 20,
  },
  image: {
    height: "44@s",
    width: "44@s",
    borderRadius: "22@s",
    marginLeft: 20,
  },
  title: {
    fontSize: "16@s",
    color: "#b8bece",
    fontWeight: "500",
  },
  name: {
    fontSize: "20@s",
    color: "#3c4560",
    fontWeight: "bold",
  },

  logosSection: {
    marginLeft: 20,
    marginTop: 30,
  },
  learningSectionTitle: {
    color: "#b8bece",
    fontWeight: "600",
    fontSize: "15@s",
    marginLeft: 20,
    marginTop: 30,
    marginBottom: 20,
    textTransform: "uppercase",
  },
  notificationIcon: {
    position: "absolute",
    right: 20,
    top: 5,
  },

  scrollView: {
    marginLeft: 20,
  },
});
