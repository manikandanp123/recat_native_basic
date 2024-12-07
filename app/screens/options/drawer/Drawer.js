import { StyleSheet, Text, View } from "react-native";
import React from "react";
// Only import react-native-gesture-handler on native platforms
// import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeDrawer from "./HomeDrawer";
import AboutDrawer from "./AboutDrawer";

const MainDrawer = createDrawerNavigator();

const Drawer = () => {
  return (
    <NavigationContainer>
      <MainDrawer.Navigator
        screenOptions={{
          drawerActiveBackgroundColor: "green",
          drawerActiveTintColor: "yellow",
          drawerInactiveTintColor: "green",
          drawerContentStyle: {
            backgroundColor: "purple",
          },
          // drawerLabel: "Home Label",
          drawerLabelStyle: {
            fontSize: 12,
          },
        }}
      >
        <MainDrawer.Screen
          name="home"
          component={HomeDrawer}
          options={{
            title: "Home Page",
          }}
        />
        <MainDrawer.Screen name="about" component={AboutDrawer} />
      </MainDrawer.Navigator>
    </NavigationContainer>
  );
};

export default Drawer;

const styles = StyleSheet.create({});
