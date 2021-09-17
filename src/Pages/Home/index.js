import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ThemeContext } from "../../Utils/ThemeManager";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme === "dark" ? "#00171f" : "#f5f1ed" },
      ]}
    >
      <Text
        style={[
          styles.text,
          { color: theme === "dark" ? "#ffb703" : "#00171f" },
        ]}
      >
        Home Screen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Home;
