import { StyleSheet, Text, View, Image } from "react-native";

export default function Header({ text }) {
  return (
    <View style={styles.main_header}>
      <Image
        style={styles.image_pas}
        source={require("../assets/racing.png")}
      />
      <Text style={styles.text_header}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main_header: {
    flexDirection: "row",
    paddingTop: 28,
    paddingBottom: 40,
    paddingLeft: 28,
  },
  text_header: {
    color: "#1B1D1F",
    fontSize: 24,
  },
  image_pas: {
    height: 40,
    width: 40,
    marginRight: 8,
  },
});
