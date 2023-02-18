import { StatusBar } from "expo-status-bar"
import { Text, SafeAreaView, StyleSheet} from "react-native"


export default function Texto(){
    return(
        <SafeAreaView> 
        <Text style={styles.text}>Mi Musica</Text>
        </SafeAreaView>
)}

const styles = StyleSheet.create({
    text:{
        paddingTop:40,
        paddingBottom:10,
        fontSize:40,
        fontWeight: 'bold',
        textAlign:'center',
        backgroundColor: '#047A04',
        color: '#fff'


    },
})