import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import SvgUri from "react-native-svg";

const ChatStripe = ({ isAi, value, style }) => {
  //these SVG's are not displaying correctly
  const bot = require("../assets/bot.svg");
  const user = require("../assets/user.svg");

  const imageSource = isAi ? bot : user;

  return (
    <View style={style}>
      <View style={styles.con}>
        <View style={styles.con2}>
          <SvgUri source={imageSource} style={styles.img} />
        </View>
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
  },
  con2: { marginRight: 10 },
  valueText: {
    marginTop: 5,
    color: "white",
  },
  img: {
    width: 70,
    height: 70,
    backgroundColor: "bot" ? "green" : "blue",
  },
  title: {
    fontWeight: "bold",
    color: "#cacaca",
  },
});
