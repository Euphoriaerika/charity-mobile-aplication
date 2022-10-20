import React from "react";
import { StyleSheet, Button, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import Header from "./Header";
import FormCol from "./FormCol";

export default function FormVol({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        style={styles.container_main}
        colors={["#F2F491", "#8B93DF"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
      >
        <Header text={"Я волонтер"} />
        <FormCol />
        <Button
          style={styles.button}
          title="Go to Home"
          onPress={() => navigation.navigate("MainList")}
        />
      </LinearGradient>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container_main: {
    flex: 1,
  },
  button: {
    width: 162,
    height: 52,
  },
});
