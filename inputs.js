import React, { Component } from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, TextInput, StyleSheet } from 'react-native'
import ButtonSubmit from './Submit.js';
import Func from './function.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const postUser =  () => {
//    const requestOptions = {
//        method: 'POST',
//        headers: { 'Content-Type': 'application/json','Accept': 'application/json', 
//        'Authorization': 'Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408'},
//        body: JSON.stringify({ 
//            email:"abh125aad@gmail.com",
//            name: "Abhi",
//            gender: 'male',
//            status: 'active'
//        })
//    };

//    fetch('https://gorest.co.in/public/v1/users', requestOptions)
//     .then((response) => response.json())
//     .then((json) => {
//         console.log('Fetch API Response', json.data);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }

class Inputs extends Component {
   
   state = {
      email: '',
      password: ''
   }
   handlefio = (text) => {
      this.setState({ fio: text })
   }
   handletelephoneNumber = (text) => {
      this.setState({ telephoneNumber: text })
   }
   handlearrivalLocation = (text) => {
      this.setState({ arrivalLocation: text })
   }
   handletargetDestination = (text) => {
      this.setState({ targetDestination: text })
   }
   handlecarDescription = (text) => {
      this.setState({ carDescription: text })
   }
   handlecapacity = (text) => {
      this.setState({ capacity: text })
   }
   handledateAndTimeOfDeparture = (text) => {
      this.setState({ dateAndTimeOfDeparture: text })
   }



   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (email, pass) => {
      alert('email: ' + email + ' password: ' + pass)
   }
   // func = (fio, telephoneNumber, arrivalLocation, targetDestination, carDescription, capacity, dateAndTimeOfDeparture) => {
   //    Func.addvolonteer()

   // }

   render() {
      return (
         <View style = {styles.inputcontainer}>
            <Text style={styles.Header}>Я волонтер</Text>


            <Text style={styles.inputtext}>ПІБ:</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               autoCapitalize = "none"
               onChangeText = {this.handlefio}/>
               

            <Text style={styles.inputtext}>Номер телефону:</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               autoCapitalize = "none"
               onChangeText = {this.handletelephoneNumber}/>


            <Text style={styles.inputtext}>Адреса відправлення:</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               autoCapitalize = "none"
               onChangeText = {this.handlearrivalLocation}/>


            <Text style={styles.inputtext}>Адреса прибуття:</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               autoCapitalize = "none"
               onChangeText = {this.handletargetDestination}/>


            <Text style={styles.inputtext}>Дата і час відправлення:</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>


            <Text style={styles.inputtext}>Кількість місць в авто:</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               autoCapitalize = "none"
               onChangeText = {this.handlecapacity}/>


            <Text style={styles.inputtext}>Опис авто:</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               autoCapitalize = "none"
               onChangeText = {this.handlecarDescription}/>




         <View style={styles.cont_col}> 
            <ButtonSubmit text_button="Допомогти" onPress={
                  () => this.func()} />
        </View>
         
            {/* <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Надіслати </Text>
            </TouchableOpacity> */}
            </View> 
      )
   }
}
// export default function Subss() {
//    const funcback = async() => {
//       try {
//          // const 
//          fio = document.getElementById('FIO').value,
//          telephoneNumber = document.getElementById('TelephoneNumber').value,
//          arrivalLocation = document.getElementById('ArrivalLocation').value,
//          targetDestination = document.getElementById('TargetDestination').value,
//          carDescription = document.getElementById('CarDescription').value,
//          capacity = document.getElementById('Capacity').value,
//          dateAndTimeOfDeparture = document.getElementById('DateAndTimeOfDeparture').value;

//          let formData = new FormData();
//          formData.append('FIO', fio);
//          formData.append('TelephoneNumber', telephoneNumber);
//          formData.append('ArrivalLocation', arrivalLocation);
//          formData.append('TargetDestination', targetDestination);
//          formData.append('CarDescription', carDescription);
//          formData.append('Capacity', capacity);
//          formData.append('DateAndTimeOfDeparture', dateAndTimeOfDeparture);

//          const res = await fetch('https://charity-mobile-aplication.herokuapp.com/volounteers/Create', {
//             method: 'POST',
//             body: formData
//          });

//     const data = await res.json();
         




//       } catch(err) {
//          console.log(err);
//       }

//    }
// }
export default Inputs


const styles = StyleSheet.create({
  cont_col: {
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    
  },

   container: {
   position: "absolute",
   position: 'relative',
    zIndex: -1
    },
    inputtext: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 20,
        lineHeight: 24,
    },
   input: {
      marginBottom: 20,
      height: 32,
      borderColor: '#2D2C34',
      borderWidth: 1,
      width: 275,
      color: '#1B1D1F',
      backgroundColor: '#F3FFFE',
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: 28,
      lineHeight: 62,
   },
   submitButton: {
      backgroundColor: '#B5C1FF',
      width: 162,
      height: 52,

   },
   submitButtonText:{
      flex: 'none',
      height: 29,
      width: 133,
      color: '#2D2C34',
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: 24,
      alignItems: 'center',
      lineHeight: 29,
      textAlign: 'center',
      
   },
   Header:{
    color: '#1B1D1F',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 28,
    lineHeight: 72,

    left: 28,
    top: 28,
    width: 180,
    height: 36,
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
   },
   inputcontainer:{
    paddingHorizontal: 50,
    paddingTop: 150,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 3,
    width: 275,
    height: 62,
    
   },
})