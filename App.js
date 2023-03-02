import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";

import { Provider } from "react-redux";
import { store } from "./store/store";

import Main from "./comp/Main";
import Auth from "./comp/Auth";

export default function App() {
  useEffect(() => {}, []);

  // FIXME Use Redux to handle state and implement validation for the login/subscribtion
  const [loggedin, setLoggedin] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Provider store={store}>{loggedin ? <Auth /> : <Main />}</Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#090d30",
  },
});
