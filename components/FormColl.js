import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";

export default class FormCol extends Component {
  handlefio = (text) => {
    this.setState({ fio: text });
  };
  handletelephoneNumber = (text) => {
    this.setState({ telephoneNumber: text });
  };
  handcount = (text) => {
    this.setState({ count: text });
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.row_inputs}>
          <View style={styles.col_inputs}>
            <Text style={styles.input_text}>ПІБ:</Text>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              onChangeText={this.handlefio}
            />
          </View>

          <View style={styles.col_inputs}>
            <Text style={styles.input_text}>Номер телефону:</Text>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              onChangeText={this.handletelephoneNumber}
            />
          </View>

          <View style={styles.col_inputs}>
            <Text style={styles.input_text}>Кількість місць:</Text>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              onChangeText={this.handcount}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  row_inputs: {
    marginHorizontal: "10%",
  },
  col_inputs: {
    marginBottom: 20,
  },
  input_text: {
    color: "#1B1D1F",
    fontSize: 20,
  },
  input: {
    width: "100%",
    backgroundColor: "white",
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginTop: 4,
    opacity: 0.7,
    borderRadius: 4,
    fontSize: 16,
    height: 36,
  },
  fr: {},
});
