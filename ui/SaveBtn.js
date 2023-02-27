import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";

export default function ClearBtn({ title, onPress }) {
  return (
    <Pressable style={styles.press} onPress={onPress}>
      <Text style={styles.ClearBtn}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  ClearBtn: {
    color: "#4be35f",
    fontWeight: "bold",
  },
  press: {
    marginRight: 7,
  },
});
