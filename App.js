import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import Inputs from './inputs';
import Inputs_esc from './inputs_esc';
// import ButtonSubmit from './Submit.js';

function HomeScreen({ navigation }) {
  return (
    <LinearGradient
        style={styles.container}
        colors={["#F2F491", "#8B93DF"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        //locations={[0.1, 0.3]}
      >
        <View style={{flex: 1}}>
            <Inputs/>
        </View>
        {/* <View style={styles.cont_col}> 
            <ButtonSubmit text_button="Допомогти" onPress={() => navigation.navigate('Details')} />
        </View> */}
    </LinearGradient>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Inputs_esc/>
      <Button
        title="Go to Home"
        onPress={() => navigation.push('Home')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  const url = "https://charity-mobile-aplication.herokuapp.com/volounteers";
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen  name="Home" component={HomeScreen} />   
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 // headerMode="none"
export default App;

const styles = StyleSheet.create({
  container_futer: {
    backgroundColor: "#CDFCF6",
    height: 96,
    flexDirection: 'row',

},
cont_col: {
  justifyContent: 'center',
  marginLeft: 'auto',
  marginRight: 'auto',
  
},

  container: {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh'
  },
  button:{
   //boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    //padding: 6px 20px,
    gap: 10,

    position: 'absolute',
    width: 162,
    height: 52,
    //left: calc(50% - 162px/2 + 0.5px),
    bottom: 82,

  },

})
