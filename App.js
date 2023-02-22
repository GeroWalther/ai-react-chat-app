import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import SendButton from "./ui/SendButton";
import ChatStripe from "./comp/ChatStripe";

let loadInterval;

function loader(e) {
  e.textContent = "";

  loadInterval = setInterval(() => {
    e.textContent += ".";

    if (e.textContent === "....") {
      e.textContent = "";
    }
  }, 300);
}

function typeText(e, t) {
  let index = 0;

  let interval = setInterval(() => {
    if (index < t.length) {
      e.innerHTML += t.charAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 20);
}

function generateUniqueId() {
  const timestamp = Date.now();
  const randomNumber = Math.random();
  const hexadecimalString = randomNumber.toString(16);

  return `id-${timestamp}-${hexadecimalString}`;
}

export default function App() {
  const showAlert = (error) => {
    Alert.alert(
      "Something went wrong",
      error,
      [
        {
          text: "OK",
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ],
      { cancelable: false }
    );
  };
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [isAi, setIsAi] = useState(false);

  async function onSend() {
    if (loading) {
      return;
    }
    setLoading(true);

    try {
      const response = await fetch(
        "https://exxpress-server-for-ai-chat-app.onrender.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: input,
          }),
        }
      );

      const data = await response.json();
      const parsedData = data.bot.trim();
      console.log({ parsedData });

      setIsAi(true);
      setInput("");
      setResult(parsedData);
    } catch (err) {
      // const errorRes = await err.message();
      console.log(err.message);
      setResult("Something went wrong");

      // showAlert(errorRes);
    } finally {
      setLoading(false);
    }
  }

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <SafeAreaProvider>
          <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            {result ? (
              <ChatStripe style={styles.chat} isAi={isAi} value={result} />
            ) : (
              <Text style={styles.label}>AI Code-G</Text>
            )}
            <View style={styles.inputCon}>
              <TextInput
                placeholder="Ask me something..."
                placeholderTextColor={"#878787"}
                keyboardType="web-search"
                value={input}
                style={styles.input}
                onChangeText={setInput}
              ></TextInput>

              <SendButton
                style={{ marginRight: 15 }}
                icon="send"
                size={24}
                color={"white"}
                onPress={onSend}
              />
            </View>
          </SafeAreaView>
        </SafeAreaProvider>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#2e3045",
  },
  chat: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 100,
    color: "#e9e9e9",
    fontSize: 16,
    marginTop: 590,
    marginLeft: 150,
  },
  inputCon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#090d30",
    padding: 5,
    paddingHorizontal: 8,
    marginBottom: -34,
  },
  input: {
    fontSize: 18,
    padding: 20,
    marginTop: 6,
    marginBottom: 12,
    borderRadius: 4,
    color: "#fff",
    borderColor: "#090d30",
    borderWidth: 1,
  },
});
