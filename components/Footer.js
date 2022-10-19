import { StyleSheet, Text, View, } from 'react-native';
import FuterBotom from './FuterBotom';

export default function Footer() {
  const goToForm = () => console.log('Button pressed futer')
    return (
        <View style={styles.container_futer}>
        <View style={styles.cont_col}> 
          <Text>Якщо ви волонтер{"\n"}або просто бажаєте{"\n"}допомогти:</Text>
        </View>
        <View style={styles.cont_col}> 
            <FuterBotom text_button="Допомогти" onPress={goToForm} />
        </View>
        </View>
  );
}

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
});
