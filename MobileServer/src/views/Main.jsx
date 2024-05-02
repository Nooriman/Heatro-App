import { View, Text, Button, Divider, Icon, Pressable } from "native-base";
import React from "react";
import Header from "../components/Header";
import InvoiceCard from "../components/InvoiceCard";
import data from "../data/mainTestData.json";
import { SafeAreaView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const Main = () => {
  const navigation = useNavigation();

  const buttonClick = async () => {
    navigation.navigate("create");
  };
  return (
    <SafeAreaView style={styles.safeViewContainer}>
      <Header />
      <View style={styles.container}>
        {/*
        <Button onPress={() => navigation.navigate("create")}>
        */}
        <Button onPress={buttonClick}>Generate New Invoice</Button>

        <Text color="#535353" italic style={{ marginTop: "5%" }}>
          Recent Jobs
        </Text>
        <Divider />

        {data.map((item) => (
          <InvoiceCard data={item} key={item.id} />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  safeViewContainer: {
    backgroundColor: "#952323",
  },
  container: {
    backgroundColor: "#F2F2F2",
    height: "100%",
    padding: "5%",
  },
  invoiceItem: {
    padding: "4%",
    borderRadius: "6",
    borderWidth: "solid 1",
    backgroundColor: "#fff",
  },
});
