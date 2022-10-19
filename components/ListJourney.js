import { StyleSheet, Text, View, Image } from 'react-native';
import ListButton from './ListBotom';

export default function ListJourney({ el }) {
    const goToForm = () => console.log('Button pressed')

    return (
      <View style={styles.container_line}>
        <View style={styles.info}>
          <View style={styles.container_place}>
            <Image style={styles.image_pas} source={require('../assets/places-icon.png')} />
            <Text style={styles.text_title}>{ el.places }</Text>
          </View>
            
          <Text style={styles.text_title}>Звідки:</Text>
          <Text style={styles.text_discr}>{el.start}</Text>

          <Text style={styles.text_title}>Куди:</Text>
          <Text style={styles.text_discr}>{el.end}</Text>

          <Text style={styles.text_title}>Час відправлення:</Text>
          <Text style={styles.text_discr}>{el.time_start}</Text>

          <Text style={styles.text_title}>{el.phone_number}</Text>
          <Text style={styles.text_discr}>{el.name_driver}</Text>
        </View>
        <ListButton text_button="Забронювати" onPress={goToForm} />
        
      </View>
    );
}

const styles = StyleSheet.create({
  container_line: {
    backgroundColor: "#F3FFFE",
    height: 280,
    width: '76%',
    marginLeft: '12%',
    marginBottom: 20,
    borderRadius: 8,
  },
  info: {
    paddingHorizontal: 20,
    paddingTop: 8,
  },
  container_place: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  text_title: {
    color: "#1B1D1F",
    fontSize: 20,
  },
  text_discr: {
    color: "#2D2C34",
    fontSize: 12,
  },
  image_pas: {
    marginRight: 8,
  },
  button_to_ef: {
    color: "#f194ff",
  }
});