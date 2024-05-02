import React from "react";
import { View, SafeAreaView } from "react-native";
import { Text } from "native-base";

const Dashboard = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "90%",
        }}
      >
        <Text italic color="#cdcdcd">
          In Progress
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
