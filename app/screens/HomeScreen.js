import {
  Button,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  StatusBar,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDeviceOrientation } from "@react-native-community/hooks";

// import { SliderBox } from "react-native-image-slider-box";

export default function HomeScreen() {
  const [count, setCount] = useState(0);
  const [images, setImages] = useState([
    "https://img.freepik.com/free-vector/realistic-cute-emoji-background_52683-85625.jpg?t=st=1732811083~exp=1732811683~hmac=36710a73b8aa9431083b5d5375ee9f319c832aefd7e7fead06c163074b3d7113&w=826",
    "https://img.freepik.com/free-vector/relax-chill-out-city-bustle-cartoon-vector-concept_33099-1385.jpg?t=st=1732811083~exp=1732811683~hmac=6bd0d93c6dffcc1bb9ec78462c8af1df442eb9b11baacb42b3c88879f7f98b49",
  ]);

  useEffect(() => {
    console.log("useeffect...");
  }, []);

  //   console.log(Platform.OS);
  const position = useDeviceOrientation();
  //   console.log(position);
  const textPressed = () => {
    console.log("textPressed");
    // alert("Hello World!!!...");
    Alert.alert("My Title", "My Message", [
      { text: "Yes", onPress: () => console.log("Yes") },
      { text: "No", onPress: () => console.log("No") },
    ]);
    Alert.prompt("My Title", "My Message", (text) =>
      console.log("prompt is ----", text)
    );
  };

  const countFun = (e) => {
    console.log("------", e);
    setCount((count) => count + 1);
  };
  const passdata = (data) => {
    console.log(data);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <View > */}
      {/* <SliderBox images={images} /> */}
      <View>
        <Text>count - {count}</Text>
      </View>
      <Button onPress={countFun} title="Increase Count"></Button>
      <Button onPress={() => passdata("hi ")} title="Pass data"></Button>
      <Text
        numberOfLines={1}
        onPress={textPressed}
        style={[
          { color: "red", backgroundColor: "black" },
          redbtn,
          styles.fs16,
        ]}
      >
        Hello World!!! PmanikandanHello World!!! PmanikandanHello World!!!
        PmanikandanHello World!!! PmanikandanHello World!!! PmanikandanHello
        World!!! PmanikandanHello World!!! PmanikandanHello World!!!
        PmanikandanHello World!!! PmanikandanHello World!!! PmanikandanHello
        World!!! PmanikandanHello World!!! Pmanikandan
      </Text>

      {/* <StatusBar style="auto" /> */}
      {/* <TouchableHighlight onPress={textPressed}> */}
      <TouchableOpacity onPress={textPressed}>
        <Image
          source={{
            uri: "https://img.freepik.com/premium-vector/colorful-creepy-creatures-illustration-background_516247-2.jpg?w=1480",
            // width: 200,
            // height: 300,
          }}
          width={200}
          height={200}
          // source={require("./assets/favicon.png")}
        />
      </TouchableOpacity>

      {/* </TouchableHighlight> */}

      {/* </View> */}
      <Button title="Click Me..." color={"red"} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fs16: {
    fontSize: 8,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingTop: Platform.OS === "android" ? 300 : 0,
    paddingTop: StatusBar.currentHeight,
    // height: position === "android" ? "100%" : '30%',
    // alignItems: "center",
    // justifyContent: "center",
  },
});

const redbtn = {
  color: "green",
  backgroundColor: "green !important",
};
