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

// FIXME validation and payment subscription must be added
const LandingScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.txtCon}>
        <Text style={styles.labTxt}>Email:</Text>
        <TextInput style={styles.TextInput} />
        <Text style={styles.labTxt}>User Name:</Text>
        <TextInput style={styles.TextInput} />
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Chat")}
      >
        <Text style={styles.txtBtn}>Start asking the AI</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2e3045",
    alignItems: "center",
  },
  TextInput: {
    padding: 15,
    color: "white",
    fontSize: 16,
    backgroundColor: "#3d455e",
    borderRadius: 5,
    marginBottom: 15,
    width: 300,
  },
  txtCon: {
    marginTop: 100,
  },
  labTxt: {
    color: "white",
    marginVertical: 10,
  },
  txtBtn: {
    color: "white",
    textAlign: "center",
    fontSize: 22,
  },
  btn: {
    backgroundColor: "#44d687",
    padding: 12,
    borderRadius: 20,
    width: 260,
    marginTop: 50,
    textAlign: "center",
  },
});
