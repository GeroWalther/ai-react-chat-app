import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";

// import { GiftedChat } from "react-native-gifted-chat";

import LandingScreen from "./comp/LandingScreen";

import Chat from "./comp/Chat";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Landing"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#090d30",
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
            options={{ title: "Let's get Started" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#090d30",
  },
});
