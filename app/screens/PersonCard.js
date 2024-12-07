import {
  FlatList,
  Platform,
  SafeAreaView,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import EachPerson from "./EachPerson";
import allPersons from "../data//person.json";
import sectiondata from "../data/sectiondata.json";

const PersonCard = () => {
  const [a, setA] = useState(100);

  const imageClicked = (data) => {
    console.log("child to parent is ---", data);
  };

  const renderItemPerson = ({ item }) => {
    return (
      <EachPerson
        key={item?.name}
        {...item}
        a={a} // parent to child props
        ImageClicked={imageClicked} //child  to parent props
      />
    );
  };

  const sectionRenderItem = ({ item }) => {
    return (
      <View style={{ backgroundColor: "red" }}>
        <Text style={styles.eachSection}>{item} </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles}>
      {/* <Text style={styles.title}>All Persons </Text> */}
      {/* <ScrollView>
        {allPersons?.map((ele, idx) => {
          console.log("ele---", ele, idx);
          return <EachPerson key={ele?.name} {...ele} />;
        })}
      </ScrollView> */}

      {/* <FlatList
        data={allPersons}
        // data={[]}
        renderItem={renderItemPerson}
        ItemSeparatorComponent={<Text>Each Seperator Text</Text>}
        ListHeaderComponent={
          <Text style={styles.title}>Header Title - All Persons </Text>
        }
        ListFooterComponent={
          <Text style={styles.title}>Footer - End of List </Text>
        }
        ListEmptyComponent={
          <View style={styles.center}>
            <Text style={styles.center}>No Data Found.... </Text>
          </View>
        }
        keyExtractor={(item) => item.name}
        // horizontal
      /> */}

      <SectionList
        sections={sectiondata}
        // sections={[]}
        renderItem={sectionRenderItem}
        SectionSeparatorComponent={({ section }) => <Text>Each Seperator</Text>}
        ListHeaderComponent={({ section }) => (
          <Text style={styles.title}> Heading title </Text>
        )}
        ListFooterComponent={({ section }) => <Text> Footer </Text>}
        ListEmptyComponent={({ section }) => <Text> No data </Text>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.title}>{section.title} </Text>
        )}
        renderSectionFooter={({ section }) => (
          <Text style={{ backgroundColor: "orange" }}></Text>
        )}
      />
    </SafeAreaView>
  );
};

export default PersonCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  title: {
    fontSize: 22,
    fontWeight: 700,
    textAlign: "center",
    marginBottom: 24,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  eachSection: {
    backgroundColor: "lightgreen",
    padding: 6,
    margin: 6,
  },
});
