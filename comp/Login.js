import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Pressable,
} from "react-native";
import React from "react";

const windowDimensions = Dimensions.get("window");
const screenDimensions = Dimensions.get("screen");

// FIXME validation and payment subscription must be added
const LandingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.txtCon}>
        <Text style={styles.labTxt}>Email:</Text>
        <TextInput style={styles.TextInput} />
        <Text style={styles.labTxt}>Password:</Text>
        <TextInput style={styles.TextInput} />
      </View>
      <TouchableOpacity
        style={styles.btn}
        //FIXME add payments subscrption here and set state accordingly to render All Chats afterwords
        onPress={() => {}}
      >
        <Text style={styles.txtBtn}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.TxtWhite}>Or </Text>
      <Pressable
        style={[styles.btn, { marginTop: 20 }]}
        onPress={() => navigation.navigate("CreateAccount")}
      >
        <Text style={styles.txtBtn}>Create a new Account</Text>
      </Pressable>
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
  TxtWhite: {
    color: "white",
    marginTop: 20,
    fontSize: 20,
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
