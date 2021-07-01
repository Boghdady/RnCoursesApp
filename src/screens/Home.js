import React from "react";
import { View, Text, Image, ScrollView, SafeAreaView } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import Logo from "../components/home/Logo";
import Card from "../components/home/Card";
import CourseCard from "../components/home/CourseCard";
import Menu from "../components/Menu/Menu";

import { courses, coursesData, logos } from "../components/home/data";
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

function LogosSection() {
  return (
    <ScrollView
      style={styles.logosSection}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {logos.map((logo) => (
        <View key={logo.id} style={styles.logosWrapper}>
          <Logo logo={logo.image} text={logo.text} />
        </View>
      ))}
    </ScrollView>
  );
}

function ContinueLearningSection() {
  return (
    <>
      <Text style={styles.sectionsTitle}>Continue Learning</Text>
      <Separator />
      <ScrollView
        style={styles.learningsWrapper}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {courses.map((course) => (
          <View key={course.id} style={styles.logosSection}>
            <Card
              title={course.title}
              image={course.image}
              logo={course.logo}
              caption={course.caption}
              subtitle={course.subtitle}
            />
          </View>
        ))}
      </ScrollView>
    </>
  );
}

function PopularCourse() {
  return (
    <>
      <Text style={styles.sectionsTitle}>Popular Courses</Text>
      <Separator />
      <ScrollView
        style={{ paddingLeft: 20 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {coursesData.map((course) => (
          <View key={course.id} style={styles.coursesWrapper}>
            <CourseCard
              title={course.title}
              subtitle={course.subtitle}
              image={course.image}
              logo={course.logo}
              author={course.author}
              avatar={course.avatar}
              caption={course.caption}
            />
          </View>
        ))}
      </ScrollView>
    </>
  );
}

function Separator() {
  return <View style={styles.separator} />;
}

export default function Home(props) {
  return (
    <View style={styles.container}>
      <Menu />
      <SafeAreaView>
        <ScrollView>
          <TitleBarSection />
          <Separator />
          <LogosSection />
          <Separator />
          <ContinueLearningSection />
          <Separator />
          <PopularCourse />
          <Separator />
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
    paddingBottom: 5,
  },
  logosWrapper: { paddingLeft: 20 },
  notificationIcon: {
    position: "absolute",
    right: 20,
    top: 5,
  },

  sectionsTitle: {
    color: "#b8bece",
    fontWeight: "600",
    fontSize: "15@s",
    marginLeft: 20,
    // marginTop: 20,
    // marginBottom: 20,
    textTransform: "uppercase",
  },

  learningsWrapper: {
    paddingLeft: 20,
  },

  coursesSection: {
    paddingRight: 20,
    paddingLeft: 20,
    // paddingBottom: 20,
  },
  coursesWrapper: { paddingBottom: 5 },

  separator: {
    width: "100%",
    height: 20,
  },
});
