import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const CustomButton = ({ title, press }) => {
  return (
    <Pressable onPress={() => press("Andoid")}>
      <View style={styles.bgColor}>
        <Text style={{ color: "yellow", backgroundColor: "orange" }}>
          {title}
        </Text>
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
