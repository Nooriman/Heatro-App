import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "../views/Main";
import CreateInvoice from "../views/CreateInvoice";
import ReviewInvoice from "../views/ReviewInvoice";

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home" component={Main} />
      <Stack.Screen name="create" component={CreateInvoice} />
      <Stack.Screen name="viewInvoice" component={ReviewInvoice} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
