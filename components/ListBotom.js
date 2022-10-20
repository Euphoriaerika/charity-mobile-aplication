import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function ListButton({ text_button, onPress }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("FormEsc")}>
      <View style={styles.button}>
        <Text style={styles.text_b}>{text_button}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#D3F2F0",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    height: 55,
    paddingVertical: 10,
  },
  text_b: {
    textAlign: "center",
    color: "#1B1D1F",
    fontSize: 24,
  },
});
