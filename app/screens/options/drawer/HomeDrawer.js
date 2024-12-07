import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const HomeDrawer = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>HomeDrawer</Text>
      <Button
        title="Go to about toggle"
        onPress={() => navigation.toggleDrawer()}
      />
      <Button
        title="Go to about jump"
        onPress={() => navigation.jumpTo("about")}
      />
    </View>
  );
};

export default HomeDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
