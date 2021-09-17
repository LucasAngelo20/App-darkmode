import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ThemeContext } from "../../Utils/ThemeManager";

const AddMore = () => {
  const { theme } = React.useContext(ThemeContext);

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
        AddMore Screen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00171f",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default AddMore;
