import { StyleSheet, Text, View, } from 'react-native';
import FuterBotom from './FuterBotom';

export default function Footer() {
  const goToForm = () => console.log('Button pressed futer')
    return (
        <View style={styles.container_futer}>
        <View style={styles.left}> 
            <Text>Якщо ви волонтер або просто бажаєте допомогти:</Text>
        </View>
        <View style={styles.right}> 
            <FuterBotom text_button="Забронювати" onPress={goToForm} />
        </View>
        </View>
  );
}

const styles = StyleSheet.create({
    container_futer: {
        backgroundColor: "#CDFCF6",
        height: 72,
        flexDirection: 'row',

  },
    left: {
      marginRight: 'auto',
  },
    right: {
      marginLeft: 'auto',
    },
});
