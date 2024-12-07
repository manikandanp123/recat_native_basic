import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ApiGet = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (limit = 3) => {
    setIsLoading(true);
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    // console.log("res----", res?.data);
    let d1 = res?.data;
    let data = await response.json();
    setData(d1);
    setIsLoading(false);
  };

  const handleRefresh = () => {
    console.log("referesh event...");
    setRefreshing(true);
    fetchData(10);
    setRefreshing(false);
  };

  const renderData = ({ item }) => {
    return (
      <View style={styles.eachBox}>
        <Text style={{ fontWeight: "bold" }}> {item?.title} </Text>
        <Text> {item?.body} </Text>
      </View>
    );
  };

  if (isLoading) {
    return (
      <SafeAreaView style={[styles.loadingcontainer, styles.container]}>
        <ActivityIndicator animating={true} color={"green"} />
        <Text style={{ textAlign: "center" }}>Loading... </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderData}
        ItemSeparatorComponent={<View style={{ height: 10 }} />}
        ListHeaderComponent={<Text> Json data free data </Text>}
        ListEmptyComponent={<Text>No data found... </Text>}
        ListFooterComponent={<Text>End of list... </Text>}
        onRefresh={handleRefresh}
        refreshing={refreshing}
      />
    </SafeAreaView>
  );
};

export default ApiGet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
  },
  loadingcontainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  eachBox: {
    padding: 4,
    backgroundColor: "lightgrey",
    borderWidth: 1,
    borderColor: "yellow",
    borderRadius: 4,
  },
});
