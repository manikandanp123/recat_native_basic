import {
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import Basic from "../components/Forms/Basic";
import SignInForm from "../components/Forms/SignInForm";

const FormScreen = () => {
  return (
    <SignInForm />

    //    {/* <SafeAreaView style={styles.container}>
    //        <Basic />
    //     </SafeAreaView> */}
  );
};

export default FormScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
  },
});
