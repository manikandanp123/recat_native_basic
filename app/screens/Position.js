import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import Box from "../components/Box";

export default function Position() {
  const [dimen, setDimen] = useState(Dimensions.get("window"));
  const window = useWindowDimensions();

  useEffect(() => {
    Dimensions.addEventListener("change", () => {
      console.log(Dimensions.get("window"));
      console.log(dimen);
    });
  });

  console.log("outside====window", dimen, window);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        //   resizeMode="cover"
        //   width={100}
        //   height={"100%"}
        style={styles.container}
        source={require("../assets/sunflower.jpeg")}
      >
        <View style={styles.logoPart}>
          <View style={styles.box1}></View>
          <View style={[styles.box1, styles.box2]}></View>
        </View>

        <View style={styles.box}>
          <Box title="PMani" style={{ backgroundColor: "red" }} />
          <Box title="PManu" style={{ backgroundColor: "yellow" }} />
          <Box title="PMass" style={{ backgroundColor: "pink" }} />
        </View>

        <View style={styles.center}>
          <Image style={styles.icon} source={require("../assets/dog.jpeg")} />
          <Text style={styles.title}>Hi All Is Well PManiKandan</Text>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.btn}>Login</Text>
          <Text style={styles.btn}>Register</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    // flexDirection: "row",
    // alignItems: "baseline",
    justifyContent: "space-around",
  },
  container: {
    flex: 1,
  },
  logoPart: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "4%",
  },
  box1: {
    width: 50,
    height: 50,
    backgroundColor: "yellow",
  },
  box2: {
    backgroundColor: "pink",
  },
  title: {
    color: "green",
    backgroundColor: "orange",
    padding: 10,
    borderRadius: 8,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "40%",
  },
  icon: {
    width: 100,
    height: 100,
  },
  bottom: {
    justifyContent: "center",
    alignItems: "flex-end",
    position: "absolute",
    bottom: 10,
    width: "100%",
  },
  btn: {
    width: "100%",
    padding: 2,
    backgroundColor: "red",
    textAlign: "center",
    margin: 4,
  },
});
