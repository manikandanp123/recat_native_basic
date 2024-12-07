import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Box({ title, style }) {
  return (
    <View style={[styles.center, style, styles.dimension]}>
      <Text>{title} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  dimension: {
    width: 100,
    height: 100,
  },
});
