import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeTab from "./HomeTab";
import AboutTab from "./AboutTab";
import Stack, { Nesting } from "../stack/Stack";

const MainTab = createBottomTabNavigator();

const Tab = () => {
  return (
    <NavigationContainer>
      <MainTab.Navigator
        screenOptions={{
          headerTintColor: "purple",
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "red",
          headerStyle: {
            backgroundColor: "orange",
          },
          tabBarLabelPosition: "beside-icon",
          tabBarShowLabel: true,
          tabBarActiveBackgroundColor: "lightblue",
        }}
      >
        <MainTab.Screen
          name="home"
          component={HomeTab}
          options={{
            title: "Home Page",
          }}
        />
        <MainTab.Screen name="about" component={AboutTab} />
        <MainTab.Screen
          name="Nesting stack"
          component={Nesting}
          options={{
            headerShown: false,
          }}
        />
      </MainTab.Navigator>
    </NavigationContainer>
  );
};

export default Tab;

const styles = StyleSheet.create({});
