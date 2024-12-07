import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const CustomButton = ({ title, press }) => {
  return (
    <Pressable onPress={() => press("IOS")}>
      <View style={styles.bgColor}>
        <Text style={{ color: "red", backgroundColor: "black" }}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  bgColor: {
    justifyContent: "center",
    alignItems: "center",
  },
});
