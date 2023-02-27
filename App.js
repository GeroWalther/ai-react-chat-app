import React, { useState } from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";

import { Provider } from "react-redux";
import { store } from "./store/store";

import LandingScreen from "./comp/LandingScreen";
import Main from "./comp/Main";

export default function App() {
  // FIXME Use Redux to handle state and implement validation for the login/subscribtion
  const [loggedin, setLoggedin] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Provider store={store}>
        {loggedin ? <LandingScreen /> : <Main />}
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#090d30",
  },
});
