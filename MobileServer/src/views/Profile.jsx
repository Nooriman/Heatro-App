import React from "react";
import { Pressable, Text, View } from "native-base";
import { SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import { useNavigation } from "@react-navigation/native";

import { MaterialIcons } from "@expo/vector-icons";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ backgroundColor: "#f2f2f2" }}>
      <StatusBar />
      <View style={styles.profile_container}>
        <Text fontSize="2xl" bold>
          Hello, Admin!
        </Text>

        <Pressable
          flexDirection="row"
          onPress={() =>
            alert("For any issue, please email to iotik.co@gmail.com")
          }
          rounded={8}
          shadow="3"
          marginTop={2}
          borderColor="coolGray.300"
          borderWidth={1}
          p="4"
          bg="white"
          style={{ alignItem: "center" }}
        >
          <MaterialIcons name="phone" size={20} color="#535353" />
          <Text fontSize="md" color="#535353" style={{ marginLeft: "5%" }}>
            Customer Support
          </Text>
        </Pressable>

        <Pressable
          flexDirection="row"
          onPress={() => alert("go to edit invoice screen?")}
          rounded={8}
          shadow="3"
          marginTop={2}
          borderColor="coolGray.300"
          borderWidth={1}
          p="4"
          bg="white"
          style={{ alignItem: "center" }}
        >
          <MaterialIcons name="edit" size={20} color="#535353" />
          <Text fontSize="md" color="#535353" style={{ marginLeft: "5%" }}>
            Edit Invoice
          </Text>
        </Pressable>

        <Pressable
          flexDirection="row"
          onPress={() => navigation.navigate("login")}
          rounded={8}
          shadow="3"
          marginTop={2}
          borderColor="coolGray.300"
          borderWidth={1}
          p="4"
          bg="white"
          style={{ alignItem: "center" }}
        >
          <MaterialIcons name="logout" size={20} color="#535353" />
          <Text fontSize="md" color="#535353" style={{ marginLeft: "5%" }}>
            Logout
          </Text>
        </Pressable>

        <Text italic color="#cdcdcd" style={{ marginTop: "10%" }}>
          App Ver 1.0.0
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profile_container: {
    padding: "5%",
    height: "100%",
  },
});
