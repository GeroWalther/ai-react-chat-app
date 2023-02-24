import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  StyleSheet,
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

// import { GiftedChat } from "react-native-gifted-chat";

import LandingScreen from "./comp/LandingScreen";

import Chat from "./comp/Chat";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        contentContainerStyle={styles.screen}
        style={styles.screen}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        enabled
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 110}
      >
        <StatusBar barStyle="light-content" />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Chat"
            screenOptions={{
              headerStyle: {
                backgroundColor: "#2e3045",
              },
              headerTintColor: "#e9e9e9",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          >
            <Stack.Screen
              name="Chat"
              component={Chat}
              options={{ title: "AI Chat Bot" }}
            />
            <Stack.Screen
              name="Landing"
              component={LandingScreen}
              options={{ title: "Lets get Started" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Scroll: {
    flex: 1,
    backgroundColor: "#2e3045",
  },
  screen: {
    flex: 1,
    backgroundColor: "#2e3045",
  },
  container: {
    flex: 1,
    backgroundColor: "#090d30",
  },
});
