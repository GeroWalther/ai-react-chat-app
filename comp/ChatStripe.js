import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import SvgUri from "react-native-svg";

const ChatStripe = ({ isAi, value, style }) => {
  //FIXME: still svg's are not showing properly
  const imageSource = isAi
    ? require("../assets/bot.svg")
    : require("../assets/user.svg");

  return (
    <View style={[style, isAi && styles.aiBackgroundTxt]}>
      <View style={styles.con}>
        {/* <View style={styles.con2}>
          <SvgUri
            uri={imageSource}
            style={[
              styles.img,
              isAi ? styles.aiBackground : styles.userBackground,
            ]}
          />
        </View> */}
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{isAi ? "AI-Bot" : "User"}</Text>
          <Text style={styles.valueText}>{value}</Text>
        </View>
      </View>
    </View>
  );
};

export default ChatStripe;
const styles = StyleSheet.create({
  con: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 10,
  },
  con2: { marginRight: 10 },
  valueText: {
    marginTop: 5,
    color: "white",
  },
  img: {
    width: 50,
    height: 50,
  },
  title: {
    fontWeight: "bold",
    color: "#cacaca",
    marginBottom: 4,
  },
  aiBackground: {
    backgroundColor: "green",
  },
  userBackground: {
    backgroundColor: "blue",
  },
  aiBackgroundTxt: {
    backgroundColor: "#252d45",
  },
});
