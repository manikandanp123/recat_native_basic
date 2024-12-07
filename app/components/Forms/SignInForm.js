import {
  Button,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";

const SignInForm = () => {
  const [name, setName] = useState("");
  const [passWord, setPassWord] = useState("");
  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      style={styles.formcontainer}
    >
      <View style={styles.form}>
        <Image
          source={{
            uri: "https://img.freepik.com/free-vector/relax-chill-out-city-bustle-cartoon-vector-concept_33099-1385.jpg?t=st=1733327516~exp=1733328116~hmac=1cdb860360e1acee4980c0f05fe69f21c2efb3d2f002268f7ea303a18ccb846c",
            width: 400,
            height: 600,
          }}
          resizeMode="contain"
        />
        <View>
          <Text style={styles.label}>Username</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            style={styles.input}
            placeholder="Enter your username..."
          />
        </View>
        <View>
          <Text>Password</Text>
          <TextInput
            value={passWord}
            onChangeText={setPassWord}
            style={styles.input}
            secureTextEntry
            placeholder="Enter your Password..."
          />
        </View>
        <Button title="submit" />
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignInForm;

const styles = StyleSheet.create({
  formcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    padding: 10,
  },
  form: {
    backgroundColor: "lightblue",
    padding: 8,
    margin: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: "green",
    padding: 4,
    margin: 4,
  },
  label: {
    fontWeight: "bold",
    fontSize: 14,
  },
});
