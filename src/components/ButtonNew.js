import React from "react";
import { View, StyleSheet } from "react-native";

import { Entypo } from "@expo/vector-icons";
import { ThemeContext } from "../Utils/ThemeManager";

export default function ButtonNew({ size,  focused }) {
  const { theme } = React.useContext(ThemeContext);

  return (
    <View style={[styles.container, {backgroundColor: theme === 'dark' ? "#ffb703" : '#003459'}]}>
      <Entypo name="plus" size={size} color={focused ? '#f5f1ed' : '#dad2bc'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
});
