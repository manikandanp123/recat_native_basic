import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const HomeTab = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>HomeTab</Text>
      <Button title="About " onPress={() => navigation.navigate("about")} />
    </View>
  );
};

export default HomeTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
