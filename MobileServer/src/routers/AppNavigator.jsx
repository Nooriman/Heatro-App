import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Authentication from "../views/Authentication.jsx";
import BotNav from "./BotNav.jsx";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="login" screenOptions={{
      headerShown: false
    }
    }>
      <Stack.Screen name="login" component={Authentication} />
      <Stack.Screen name="main" component={BotNav} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
