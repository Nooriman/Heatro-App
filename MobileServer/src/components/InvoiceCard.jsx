import { Pressable, Text, Icon } from "native-base";
import { StyleSheet, View } from "react-native";
import React from "react";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const InvoiceCard = ({ data }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.invoiceCard_container, styles.invoiceCard_shadows]}
      onPress={() => navigation.navigate("viewInvoice")}
    >
      <View style={{ justifyContent: "space-between" }} flexDirection="row">
        <Text bold fontSize="lg" color="#575757">
          #{data.id}
        </Text>
        <Text color="#575757" fontSize="2xs">
          {data.date}
        </Text>
      </View>
      <View flexDirection="row" style={{ alignItems: "center" }}>
        <Feather name="check-circle" size={15} color="#59CE8F" />
        <Text color="#575757" style={{ marginLeft: "2%" }}>
          {data.services}
        </Text>
      </View>
      <View flexDirection="row" style={{ alignItems: "center" }}>
        <MaterialIcons name="location-pin" size={15} color="#6181F4" />
        <Text
          color="#575757"
          style={{ marginLeft: "2%" }}
          isTruncated
          width="80%"
          maxW="300"
        >
          {data.location}
        </Text>
      </View>
    </Pressable>
  );
};

export default InvoiceCard;

const styles = StyleSheet.create({
  invoiceCard_container: {
    paddingHorizontal: "4%",
    paddingVertical: "3%",
    marginTop: "3%",
    borderRadius: "6",
    backgroundColor: "#fff",
  },
  invoiceCard_shadows: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
