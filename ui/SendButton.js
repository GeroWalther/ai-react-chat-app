import { Pressable, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

function SendButton({ icon, size, color, onPress, style }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.btn, style, pressed && styles.pressed]}
      onPress={onPress}
    >
      <FontAwesome name={icon} size={size} color={color} />
    </Pressable>
  );
}
export default SendButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#0f4670",
    padding: 10,
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.7,
  },
});
