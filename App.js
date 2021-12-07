import { LogBox, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";

import HomeScreen from "./src/screens/HomeScreen";

LogBox.ignoreLogs(["Remote debugger"]);

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <HomeScreen />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 50,
  },
});

export default App;
