import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";

export default function ClearBtn({ title, onPress, style }) {
  return (
    <Pressable style={styles.press} onPress={onPress}>
      <Text style={styles.ClearBtn}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  ClearBtn: {
    color: "#ff7575",
    fontWeight: "bold",
  },
  press: {
    marginRight: 10,
  },
});
