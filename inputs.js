import React, { Component } from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, TextInput, StyleSheet } from 'react-native'

class Inputs extends Component {
   state = {
      email: '',
      password: ''
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (email, pass) => {
      alert('email: ' + email + ' password: ' + pass)
   }
   render() {
      return (
         <View style = {styles.inputcontainer}>
            <Text style={styles.Header}>Я волонтер</Text>
            <Text style={styles.inputtext}>ПІБ:</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            <Text style={styles.inputtext}>Номер телефону:</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>

            <Text style={styles.inputtext}>Адреса відправлення:</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>

            <Text style={styles.inputtext}>Адреса прибуття:</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>

            <Text style={styles.inputtext}>Дата і час відправлення:</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>

            <Text style={styles.inputtext}>Кількість місць в авто:</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>

            <Text style={styles.inputtext}>Опис авто:</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
         
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Надіслати </Text>
            </TouchableOpacity>
            </View> 
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
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