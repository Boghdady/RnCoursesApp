import React from "react";
import { View, Text } from "react-native";

import { ScaledSheet } from "react-native-size-matters";

export default function MenuItem({ title, subtitle, Icon }) {
  return (
    <View style={styles.itemContainer}>
      {Icon(styles.itemIcon)}
      <View style={styles.titleAndSubtitleContainer}>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemSubtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = ScaledSheet.create({
  itemContainer: {
    flexDirection: "row",
    marginBottom: "20@vs",
  },
  titleAndSubtitleContainer: {
    marginLeft: 20,
  },
  itemIcon: {
    marginTop: 12,
  },
  itemTitle: {
    fontSize: "28@s",
    fontWeight: "500",
    color: "#3C4560",
  },
  itemSubtitle: {
    color: "#828282",
    fontSize: "16@s",
  },
});
