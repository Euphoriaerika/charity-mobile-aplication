import { StyleSheet, Text, View, } from 'react-native';

export default function Header({ text }) {
    return (
       <View style={styles.main_header}>
        <Text style={styles.text_header}>{text}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
    main_header: {
        paddingTop: 28,
        paddingBottom: 40,
        paddingLeft: 28,

  },
    text_header: {
        color: "#1B1D1F",
        fontSize: 24,

  },
});
