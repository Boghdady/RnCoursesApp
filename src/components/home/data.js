import React from "react";
import { PlayIcon, LogoutIcon, StartIcon, BillingIcon } from "./Icons";
export const courses = [
  {
    id: 1,
    title: "React Native for Designers",
    image: require("../../assets/background11.jpg"),
    logo: require("../../assets/logo-react.png"),
    caption: "React Native",
    subtitle: "5 of 12 sections",
  },
  {
    id: 2,
    title: "Master React for Front-end",
    image: require("../../assets/background16.jpg"),
    logo: require("../../assets/logo-react.png"),
    caption: "React Native",
    subtitle: "5 of 12 sections",
  },
  {
    id: 3,
    title: "The Complete Javascript Course",
    image: require("../../assets/background3.jpg"),
    logo: require("../../assets/logo-react.png"),
    caption: "React Native",
    subtitle: "5 of 12 sections",
  },
];

export const logos = [
  {
    id: "1",
    image: require("../../assets/logo-invision.png"),
    text: "Invision",
  },
  { id: "2", image: require("../../assets/logo-sketch.png"), text: "Sketch" },
  {
    id: "3",
    image: require("../../assets/logo-framerx.png"),
    text: "Framer X",
  },
  { id: "4", image: require("../../assets/logo-figma.png"), text: "Figma" },
];

export const coursesData = [
  {
    id: "1",
    title: "Prototype in InVision Studio",
    subtitle: "10 Sections",
    image: require("../../assets/background1.jpg"),
    logo: require("../../assets/logo-studio.png"),
    author: "Stephen",
    avatar: require("../../assets/avatar.jpg"),
    caption: "Design an interactive prototype",
  },
  {
    id: "2",
    title: "Prototype in InVision Studio",
    subtitle: "10 Sections",
    image: require("../../assets/background1.jpg"),
    logo: require("../../assets/logo-studio.png"),
    author: "Stephen",
    avatar: require("../../assets/avatar.jpg"),
    caption: "Design an interactive prototype",
  },
  {
    id: "3",
    title: "Prototype in InVision Studio",
    subtitle: "10 Sections",
    image: require("../../assets/background1.jpg"),
    logo: require("../../assets/logo-studio.png"),
    author: "Stephen",
    avatar: require("../../assets/avatar.jpg"),
    caption: "Design an interactive prototype",
  },
];

export const menuItems = [
  {
    title: "Account",
    subtitle: "setting",
    Icon: (style) => <PlayIcon style={style} />,
  },
  {
    title: "Billing",
    subtitle: "payment",
    Icon: (style) => <BillingIcon style={style} />,
  },
  {
    title: "Learn React",
    subtitle: "build this app",
    Icon: (style) => <StartIcon style={style} />,
  },
  {
    title: "Logout",
    subtitle: "see you soon!",
    Icon: (style) => <LogoutIcon style={style} />,
  },
];
