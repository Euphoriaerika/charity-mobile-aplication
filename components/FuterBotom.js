import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function FuterBotom({ text_button }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("FormVol")}>
      <View style={styles.button}>
        <Text style={styles.text_b}>{text_button}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#B5C1FF",

    height: 50,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  text_b: {
    textAlign: "center",
    color: "#1B1D1F",
    fontSize: 24,
  },
});
