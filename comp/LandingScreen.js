import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const windowDimensions = Dimensions.get("window");
const screenDimensions = Dimensions.get("screen");

const LandingScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.txtCon}>
        <Text style={styles.labTxt}>Email:</Text>
        <TextInput style={styles.TextInput} />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
        <Text style={styles.btn}>Go to Chat</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2e3045",
  },
  TextInput: {
    padding: 20,
    color: "white",
    backgroundColor: "#3d455e",
  },
  labTxt: {
    color: "white",
  },
  btn: {
    padding: 20,
    borderRadius: 20,
    color: "white",
  },
});
