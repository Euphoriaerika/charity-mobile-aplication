import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainList from "./components/MainList";
import FormVol from "./components/FormVol";
import FormEsc from "./components/FormEsc";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainList"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="FormEsc" component={FormEsc} />
        <Stack.Screen name="MainList" component={MainList} />
        <Stack.Screen name="FormVol" component={FormVol} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
