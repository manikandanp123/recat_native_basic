import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import React from "react";

const EachPerson = ({
  a,
  name,
  age,
  character,
  address,
  skills,
  image,
  ImageClicked,
}) => {
  console.log("a data is ", a);
  return (
    <View style={styles.eachBox}>
      <View style={styles.topPart}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.age}> {age} </Text>
      </View>
      <View style={styles.center}>
        <Text style={styles.btn}>{character}</Text>
      </View>
      <Pressable onPress={() => ImageClicked(`Image Clicked  ${name} `)}>
        <Image
          source={{ uri: image }}
          accessibilityLabel={` ${name} eachPersonImage `}
          style={styles.image}
          resizeMode="cover"
        />
      </Pressable>

      <View>
        <Text style={styles.boldName}> ADDRESS: {address.join(", ")} </Text>
      </View>
      <View>
        <Text style={styles.boldName}> SKILLS: {skills.join(", ")} </Text>
      </View>
    </View>
  );
};

export default EachPerson;

const styles = StyleSheet.create({
  eachBox: {
    padding: 16,
    margin: 16,
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 4,
    ...Platform.select({
      ios: {
        backgroundColor: "#f5f5f5",
        shadowColor: "red",
        shadowOpacity: 0.5,
        shadowOffset: {
          width: 5,
          height: 5,
        },
      },
      android: {
        elevation: 10,
      },
    }),
  },
  image: {
    width: "100%",
    height: 400,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  topPart: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    color: "green",
    fontSize: 16,
    fontWeight: 900,
  },
  boldName: {
    fontSize: 16,
    fontWeight: 700,
  },
  age: {
    color: "orange",
    fontSize: 14,
    fontWeight: 500,
    backgroundColor: "purple",
    borderRadius: "50%",
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  btn: {
    borderColor: "blue",
    borderWidth: 2,
    borderRadius: 4,
    padding: 4,
    margin: 4,
    color: "#fff",
    backgroundColor: "black",
    fontSize: 12,
    fontWeight: 600,
  },
});
