import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Main from "../views/Main";
import SearchView from "../views/SearchView";
import Dashboard from "../views/Dashboard";
import Profile from "../views/Profile";

import HomeNavigator from "./HomeNavigator";

import { Feather, SimpleLineIcons } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

const BotNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      shifting
      activeColor="#fff"
      inactiveColor="#fff"
      barStyle={{ backgroundColor: "#952323", height: "9.5%" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchView}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="search" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="graph" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BotNav;
