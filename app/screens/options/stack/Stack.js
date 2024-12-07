import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutStack from "./AboutStack";
import HomeStack from "./HomeStack";

const MainStack = createNativeStackNavigator();

export const Nesting = () => {
  return (
    <MainStack.Navigator
      initialRouteName="home"
      screenOptions={{
        // headerTitle: "hi",
        headerStyle: {
          backgroundColor: "purple",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontSize: 16,
          fontWeight: 700,
          fontFamily: "open-sans",
        },
        headerRight: () => (
          <Pressable onPress={() => Alert.alert("Menu btn is pressed...")}>
            <Text style={{ color: "#fff" }}> Menu</Text>
          </Pressable>
        ),
        // headerLeft: () => (
        //   <Pressable onPress={() => Alert.alert("Back btn is pressed...")}>
        //     <Text style={{ color: "#fff" }}> Back</Text>
        //   </Pressable>
        // ),
        contentStyle: {
          backgroundColor: "lightblue",
        },
      }}
    >
      <MainStack.Screen
        name="home"
        component={HomeStack}
        initialParams={{
          name: "From Main stack data....",
        }}
        options={{
          title: "Welcome Home",
        }}
      />
      <MainStack.Screen
        name="about"
        component={AboutStack}
        // options={({ route }) => ({
        //   title: route.params?.name,
        // })}
      />
    </MainStack.Navigator>
  );
};

const Stack = () => {
  return (
    <NavigationContainer>
      <Nesting />
    </NavigationContainer>
  );
};

export default Stack;

const styles = StyleSheet.create({});
