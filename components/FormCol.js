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
    this._fetchStory = this._fetchStory.bind(this);

    this.state = {
      fio: "",
      telephoneNumber: "",
      arrivalLocation: "",
      targetDestination: "",
      carDescription: "",
      capacity: "",
      dateAndTimeOfDeparture: "",
    };
  }
  async _fetchStory() {
    try {
      let formData = new FormData();
      formData.append("FIO", this.state.fio);
      formData.append("TelephoneNumber", this.state.telephoneNumber);
      formData.append("ArrivalLocation", this.state.arrivalLocation);
      formData.append("TargetDestination", this.state.targetDestination);
      formData.append("CarDescription", this.state.carDescription);
      formData.append("Capacity", this.state.capacity);
      formData.append(
        "DateAndTimeOfDeparture",
        this.state.dateAndTimeOfDeparture
      );

      const res = await fetch(
        "https://charity-mobile-aplication.herokuapp.com/volounteers/Create",
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
            <Text style={styles.input_text}>Адреса відправлення:</Text>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              onChangeText={(text) => this.setState({ arrivalLocation: text })}
            />
          </View>

          <View style={styles.col_inputs}>
            <Text style={styles.input_text}>Адреса прибуття:</Text>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              onChangeText={(text) =>
                this.setState({ targetDestination: text })
              }
            />
          </View>

          <View style={styles.col_inputs}>
            <Text style={styles.input_text}>Дата і час відправлення:</Text>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              onChangeText={(text) =>
                this.setState({ dateAndTimeOfDeparture: text })
              }
            />
          </View>

          <View style={styles.col_inputs}>
            <Text style={styles.input_text}>Кількість місць в авто:</Text>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              onChangeText={(text) => this.setState({ capacity: text })}
            />
          </View>

          <View style={styles.col_inputs}>
            <Text style={styles.input_text}>Опис авто:</Text>
            <TextInput
              style={[styles.input, { height: 80 }]}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              onChangeText={(text) => this.setState({ carDescription: text })}
            />
          </View>
          <TouchableOpacity onPress={this._fetchStory}>
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
    marginBottom: 40,
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
