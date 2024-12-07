import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function CssScreen() {
  return (
    <View style={styles.container}>
      <View style={{ width: 200, height: 200, backgroundColor: "red" }} />
      <View
        style={{
          width: 100,
          height: 100,
          alignSelf: "flex-end",
          backgroundColor: "orange",
        }}
      />
      <View style={{ width: 100, height: 100, backgroundColor: "green" }} />
      <View style={{ width: 100, height: 100, backgroundColor: "blue" }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // alignContent: "center",
    // flexWrap: "wrap",
  },
});
