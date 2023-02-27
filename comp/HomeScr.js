import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";

export default function HomeScr() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>HomeScr</Text>
      {/* //FIXME Render a FlatList with with saved chats where the user can return to his saved chats */}
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Chat")}
      >
        <Text style={styles.txtBtn}>Open a new Chat</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
