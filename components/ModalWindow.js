import { React, useEffect, useState } from "react";
import { StyleSheet, View ,Text, Image, Modal } from "react-native";
import * as Font from 'expo-font';

const fonts = () => Font.loadAsync({
  'mt-semibold':require('./assets/fonts/Montserrat-SemiBold.ttf'),
  'mt-regular':require('./assets/fonts/Montserrat-Regular.ttf'),
})

const useCountdown = (onDone, initialSeconds) => {
    const [seconds, setSeconds] = useState(initialSeconds);
    const [timeout, _setTimeout] = useState();

    const countDown = () => {
        setSeconds((prev) => prev - 1);
    };

    const runTimer = () => {
        if(seconds === 0) return onDone()
        const timer = setTimeout(() => {
            countDown();
        }, 1000);
        _setTimeout(timer);
    };

    useEffect(() => {
        runTimer()
    }, [seconds]);

    return {seconds};
};

export default function ModalWindow(){
    const {seconds} = useCountdown(onDone, 5);
    const onDone = () => alert("WOW"); //Дописати штуку, яка перекина вас на менйн екран
  return (
      <View style={styles.main}>
        <Modal visible = {true}>
          <View style = {styles.modal_bg}>
            <View style={styles.modal}>
              <Text style={styles.text1} >Дякуємо, що{'\n'} допомагаєте людям!</Text>
              <Text style ={styles.text2}>Разом до перемоги!</Text>
              <Image source={require('./assets/icon.png')}/>
            </View>
           </View>
          </Modal>
      </View>
  );
}

const styles = StyleSheet.create({
  text1:{
    textAlign:'center',
    fontFamily:'mt-semibold',
    fontSize:24,
    lineHeight:24,
    paddingTop: 32,
  },
  text2:{
    textAlign:'center',
    fontFamily:'mt-regular',
    fontSize:16,
    lineHeight:24,
    paddingTop: 12,
    paddingBottom:12,
  },
  modal_bg:{
    flex:1,
    backgroundColor:'rgba(27, 29, 31, 0.5)',
    justifyContent:'center',
    alignItems:'center',
  },
  modal:{
    backgroundColor:'#F3FFFE',
    width:319,
    height:199,
  }
})