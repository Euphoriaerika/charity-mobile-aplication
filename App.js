import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainList from "./components/MainList";
import FormVol from "./components/FormVol";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainList"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="MainList" component={MainList} />
        <Stack.Screen name="FormVol" component={FormVol} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
