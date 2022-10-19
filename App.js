import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import Inputs from './inputs';

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
      
      <Button style={styles.button}
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
       <Inputs/>
    </View>
  
    </LinearGradient>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
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

    /* Blue */

    //background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #B5C1FF,
    /* Black */

    //border: 0.5px solid #2D2C34;,
    //box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    //border-radius: 8,

  },

})
