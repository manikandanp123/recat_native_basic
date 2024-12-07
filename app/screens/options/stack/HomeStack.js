import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const HomeStack = ({ navigation, route }) => {
  const navigationHooks = useNavigation();

  const btnPressed = () => {
    navigationHooks.navigate("about", { name: "Pmani", age: 26 });
    // navigation.navigate("about");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>HomeStack</Text>
      <Button title="Go to About" onPress={btnPressed} />
      <Text>Data from About page</Text>
      <Text> Name is {route?.params?.name} </Text>
    </SafeAreaView>
  );
};

export default HomeStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
