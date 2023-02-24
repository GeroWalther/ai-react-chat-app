import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import SendButton from "../ui/SendButton";

import ChatStripe from "./ChatStripe";

//function to type the ansered text letter by letter
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

// maybe not needed with a flatlist? gives every message/answer unique id's
function generateUniqueId() {
  const timestamp = Date.now();
  const randomNumber = Math.random();
  const hexadecimalString = randomNumber.toString(16);
  return `id-${timestamp}-${hexadecimalString}`;
}

function Chat() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [isAi, setIsAi] = useState(false);
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
    <>
      <ScrollView contentContainerStyle={{ flex: 1 }} style={styles.screen}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          {!loading ? (
            <Text style={styles.label}>AI Code-G</Text>
          ) : (
            <ActivityIndicator />
          )}
          {result && (
            // past chat messages and user questions are not visible
            <ChatStripe style={styles.chat} isAi={isAi} value={result} />
          )}
        </View>
      </ScrollView>
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
        {/* SendButton moves right when having a longer input value. The TextInput should grow instead*/}
        <SendButton
          style={{ marginRight: 15 }}
          icon="send"
          size={24}
          color={"white"}
          onPress={onSend}
        />
      </View>
    </>
  );
}

export default Chat;

const styles = StyleSheet.create({
  chat: {
    marginBottom: 20,
  },
  screen: {
    backgroundColor: "#2e3045",
  },
  label: {
    marginBottom: 100,
    color: "#e9e9e9",
    fontSize: 16,
    marginLeft: 150,
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
  },
});
