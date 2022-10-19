import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
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
      <Inputs/>
      <Button style={styles.button}
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
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
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

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
    paddingHorizontal: 20,
    paddingVertical: 6,
    gap: 10,
    alignItems: 'center',
    color: '#B5C1FF',
    border: 0.5,
    position: 'absolute',

  },

})
