import React from "react";
import {
  Entypo,
  Feather,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../Pages/Home";
import Settings from "../Pages/Settings";
import Favorites from "../Pages/Favorites";
import Products from "../Pages/Products";
import AddMore from "../Pages/AddMore";
import ButtonNew from "../components/ButtonNew";
import { ThemeContext } from "../Utils/ThemeManager";

const Tab = createBottomTabNavigator();

export default function Routes() {
  const { theme } = React.useContext(ThemeContext);
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: theme === 'dark' ? "#003459" : '#ffb703',
          borderTopColor: "transparent",
          height: "10%",
        },
        activeTintColor: theme === 'dark' ? "#ffb703" : '#003459',
        tabStyle: {
          paddingBottom: 5,
          paddingTop: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Products"
        component={Products}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="shopping-cart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="AddMore"
        component={AddMore}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused, size }) => (
            <ButtonNew size={size} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="heart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
