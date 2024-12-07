import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const AboutStack = ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.name,
    });
  }, [navigation, route]);

  const person = route.params;
  console.log("person----", person);
  const btnPressed = () => {
    navigation.navigate("home", { name: "All is Good ......" });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>About page</Text>
      <Button title="Go to Home" onPress={btnPressed} />
      <Text> {person?.name} </Text>
      <Text> {person?.age} </Text>
    </SafeAreaView>
  );
};

export default AboutStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputText: {
    padding: 3,
    borderWidth: 1,
    width: "50%",
  },
});
