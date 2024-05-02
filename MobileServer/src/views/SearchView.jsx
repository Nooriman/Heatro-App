import { Input, View, Button, Text, Divider } from "native-base";
import React, { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import InvoiceCard from "../components/InvoiceCard";
import data from "../data/mainTestData.json";

const SearchView = () => {
  const [searchText, setSearchText] = useState();

  const searchPressed = () => {
    alert(`Searched Item: ${searchText}`);
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#f2f2f2" }}>
      <StatusBar />
      <View style={styles.search_container}>
        <Text fontSize="lg" fontWeight="bold" color="#535353">
          Search Invoice
        </Text>

        <Input
          type="text"
          value={searchText}
          size="sm"
          style={{ backgroundColor: "#fff" }}
          placeholder="Invoice Number e.g #1234"
          onChange={(e) => setSearchText(e.nativeEvent.text)}
          InputRightElement={
            <Button onPress={searchPressed}>
              <MaterialIcons name="search" size={15} color="#fff" />
            </Button>
          }
        />
      </View>

      <View style={{ paddingHorizontal: "5%" }}>
        <View
          justifyContent="center"
          alignItems="center"
          style={{ height: "60%" }}
        >
          <Ionicons name="file-tray" size={60} color="#cdcdcd" />
          <Text italic fontSize="3xl" color="#cdcdcd">
            No Data
          </Text>
        </View>

        <View>
          <Text color="#535353" italic>
            Search Result
          </Text>
          <Divider />
          <InvoiceCard data={data[0]} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchView;

const styles = StyleSheet.create({
  search_container: {
    padding: "5%",
  },
});
