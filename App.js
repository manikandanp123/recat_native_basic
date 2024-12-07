import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Button,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";

import { useDeviceOrientation } from "@react-native-community/hooks";
import HomeScreen from "./app/screens/HomeScreen";
import CssScreen from "./app/screens/CssScreen";
import Position from "./app/screens/Position";
import PlatformScreen from "./app/screens/PlatformScreen";
import PersonCard from "./app/screens/PersonCard";
import FormScreen from "./app/screens/FormScreen";
import ApiGet from "./app/screens/ApiGet";
import Stack from "./app/screens/options/stack/Stack";
import Drawer from "./app/screens/options/drawer/Drawer";
import Tab from "./app/screens/options/tab/Tab";

export default function App() {
  // return <HomeScreen />;
  // return <CssScreen />;
  // return <Position />;
  // return <PlatformScreen />;
  // return <PersonCard />;
  // return <FormScreen />;
  // return <ApiGet />;
  // return <Stack />;
  // return <Drawer />;
  return <Tab />;
}
const styles = StyleSheet.create({});
