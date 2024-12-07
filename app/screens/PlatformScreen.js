import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomButton from "../components/ButtonSpecific/CustomButton";

const PlatformScreen = () => {
  const onpressBtn = (data) => {
    console.log("btn pressed", data);
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Text style={styles.textSelect}> Specific Platform usage... </Text>
        <CustomButton title="Common Btn" press={onpressBtn} />
      </View>
    </SafeAreaView>
  );
};

export default PlatformScreen;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "lightgreen",
  },
  container: {
    flex: 1,
    backgroundColor: "lightgreen",
    paddingTop: Platform.OS === "android" ? 60 : 0,
  },
  textSelect: {
    ...Platform.select({
      ios: {
        color: "orange",
      },
      android: {
        color: "purple",
      },
    }),
  },
});
