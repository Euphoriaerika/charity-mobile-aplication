import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, ScrollView, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "./Header";
import Footer from "./Footer";
import ListJourney from "./ListJourney";

export default function MainList({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);

  const url = "https://charity-mobile-aplication.herokuapp.com/volounteers";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setloading(false));
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        style={styles.container_main}
        colors={["#777CE3", "#49EDBC", "#00FFF0"]}
        start={{ x: 0.1, y: 0.6 }}
        end={{ x: 0.9, y: 0.4 }}
      >
        <Header text={"Рейси"} />

        <ScrollView>
          {loading ? (
            <View></View>
          ) : (
            data.map((post) => (
              <View>
                <ListJourney el={post} pressiing={navigation} />
              </View>
            ))
          )}
        </ScrollView>
        <Footer pressiing={navigation} />
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
});
