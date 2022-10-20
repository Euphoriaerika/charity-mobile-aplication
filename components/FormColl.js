import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default class FormCol extends Component {
  constructor(props) {
    super(props);
    this._fetchEsc = this._fetchEsc.bind(this);

    this.state = {
      fio: "",
      telephoneNumber: "",
      bookedPlaces: "",
    };
  }

  async _fetchEsc() {
    try {
      let formData = new FormData();
      formData.append("FIO", this.state.fio);
      formData.append("TelephoneNumber", this.state.telephoneNumber);
      formData.append("BookedPlaces", this.state.bookedPlaces);

      const res = await fetch(
        "https://charity-mobile-aplication.herokuapp.com/escaper/Create",
        {
          method: "POST",
          body: formData,
        }
      );
    } catch (err) {
      console.log(err);
    }
  }

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
              onChangeText={(text) => this.setState({ fio: text })}
            />
          </View>

          <View style={styles.col_inputs}>
            <Text style={styles.input_text}>Номер телефону:</Text>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              onChangeText={(text) => this.setState({ telephoneNumber: text })}
            />
          </View>

          <View style={styles.col_inputs}>
            <Text style={styles.input_text}>Кількість місць:</Text>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              onChangeText={(text) => this.setState({ bookedPlaces: text })}
            />
          </View>
          <TouchableOpacity onPress={this._fetchEsc}>
            <View style={styles.button}>
              <Text style={styles.text_b}>Надіслати</Text>
            </View>
          </TouchableOpacity>
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
