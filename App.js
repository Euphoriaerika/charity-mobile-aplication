import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, FlatList} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from './components/Header';
import Footer from './components/Footer';
import ListJourney from './components/ListJourney';

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    { start: 'Київ', end: 'Львів', time_start: '23:00', name_driver: 'Богдан', phone_number: '+380988560977', places: 3 },
    { start: 'Гадяч', end: 'Миргород', time_start: '10:00', name_driver: 'Віталік', phone_number: '+380968364957', places: 1 },
    { start: 'Одеса', end: 'Южноукраїнськ', time_start: '09:00', name_driver: 'Дімка', phone_number: '+380668362967', places: 4 },
  ])
  return (
<SafeAreaView style={styles.container}>
      <LinearGradient
        style={styles.container_main}
        colors={["#777CE3", "#49EDBC", "#00FFF0"]}
        start={{ x: 0.1, y: 0.6 }}
        end={{ x: 0.9, y: 0.4 }}>
        
        <Header text={"Рейси"} />

      <FlatList data={listOfItems} renderItem={({ item }) => (
          <ListJourney el={item}/>
        )} >
        </FlatList>
        
        <Footer/>

      </LinearGradient>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  container_main: {
    flex: 1,
  },
});
