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

const Basic = () => {
  const [name, setName] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <View>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        // secureTextEntry // for type password
        placeholder="Enter your name..."
        keyboardType="numeric"
        autoComplete="none"
        autoCorrect={false}
        autoCapitalize="words"
      />
      <Text>{name} </Text>

      {/* textarea */}
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Address"
        multiline
      />

      <View style={styles.switchContainer}>
        <Text>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode((previousState) => !previousState)}
          thumbColor={"lightblue"}
          trackColor={{ false: "orange", true: "green" }}
        />
      </View>
    </View>
  );
};

export default Basic;
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    margin: 2,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  textArea: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
