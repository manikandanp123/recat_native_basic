import { StyleSheet, Text, View } from "react-native";
import React from "react";

const AboutDrawer = () => {
  return (
    <View style={styles.container}>
      <Text>AboutDrawer</Text>
    </View>
  );
};

export default AboutDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
