import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TextInput,
  KeyboardAvoidingView,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import SendButton from "../ui/SendButton";

import ChatStripe from "./ChatStripe";

//FIXME function to type the ansered text letter by letter to have a better user expierience - not implemented yet.
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
  return `${timestamp}-${hexadecimalString}`;
}

function Chat() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);

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

  async function onSend() {
    if (loading) {
      return;
    }
    setLoading(true);
    setChat((prev) => [
      ...prev,
      { msg: input, id: generateUniqueId(), isAi: false },
    ]);
    setInput("");
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
      setResult(parsedData);
      setChat((prev) => [
        ...prev,
        { msg: parsedData, id: generateUniqueId(), isAi: true },
      ]);
    } catch (err) {
      //FIXME: showAlert not properly showing. Needs Error handling.
      const errorRes = await err.message();
      console.log(err.message);
      setResult("Something went wrong");
      showAlert(errorRes);
    } finally {
      setLoading(false);
    }
  }

  return (
    <KeyboardAvoidingView
      contentContainerStyle={styles.screen}
      style={styles.screen}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled
      keyboardVerticalOffset={Platform.OS === "ios" ? 95 : 110}
    >
      <View style={{ flex: 1, justifyContent: "center" }}>
        {!result && <Text style={styles.label}>AI Code-G</Text>}
        {loading && <ActivityIndicator />}
        {result && (
          <FlatList
            style={styles.flat}
            data={chat}
            renderItem={({ item }) => (
              <ChatStripe
                key={item.id}
                style={styles.chat}
                isAi={item.isAi}
                value={item.msg}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>

      <View style={styles.inputCon}>
        <TextInput
          placeholder="Ask me something..."
          placeholderTextColor={"#878787"}
          keyboardType="web-search"
          value={input}
          style={styles.input}
          onChangeText={setInput}
          multiline
          textAlignVertical="top"
        />
        <SendButton
          style={{ marginRight: 15 }}
          icon="send"
          size={24}
          color={"white"}
          onPress={onSend}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

export default Chat;

const styles = StyleSheet.create({
  chat: {
    marginBottom: 20,
  },
  screen: {
    flex: 1,
    backgroundColor: "#2e3045",
  },
  label: {
    margin: 20,
    color: "#e9e9e9",
    fontSize: 16,
    marginLeft: 155,
  },
  inputCon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#090d30",
    width: "100%",
    padding: 5,
    paddingHorizontal: 5,
  },
  input: {
    width: "85%",
    fontSize: 18,
    padding: 20,
    marginTop: 15,
    borderRadius: 4,
    color: "#fff",
    borderColor: "#090d30",
    borderWidth: 1,
    maxHeight: 150,
  },
});
