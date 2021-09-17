import React from "react";
import { StatusBar, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import Routes from "./src/Routes/routes";
import { ThemeContext, ThemeProvider } from "./src/Utils/ThemeManager";

const ToggleButton = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        top: "5%",
        left: "7%",
      }}
      onPress={() => toggleTheme()}
    >
      {theme === "dark" ? (
        <Feather
          name="sun"
          size={30}
          color={theme === "dark" ? "#fff" : "#000"}
        />
      ) : (
        <Feather
          name="moon"
          size={30}
          color={theme === "dark" ? "#fff" : "#000"}
        />
      )}
    </TouchableOpacity>
  );
};

function App() {
  const { theme } = React.useContext(ThemeContext);

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={theme === "dark" ? "light-content" : "dark-content"}
      />
      <Routes />
      <ToggleButton />
    </NavigationContainer>
  );
}

export default () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
