import { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";


const data = [
    {id: 1, Text: 'Rock'},
    {id: 2, Text: 'Pop'},
    {id: 3, Text: 'Bachata'},
    {id: 4, Text: 'Salsa'},
    {id: 5, Text: 'Bolero'},

];


class Genero extends Component {
_renderItem(item){
    return(
        <View style={styles.item}>

        <Text style={styles.letra}>{item.Text}</Text>
        </View>
    )
}

    render(){
        return(
            <View style={styles.container}>
            <FlatList
            horizontal
            renderItem={({item}) => this._renderItem(item)}
            data={data}

            />
            </View>
        )
        } 

}

export default Genero

  const styles=StyleSheet.create({
    container: {
        backgroundColor:'#047A04',
        alignItems: 'center',
        justifyContent: 'center',
      },
      item: {
        borderRadius:10,
        backgroundColor: '#121712',
        padding: 20,
        paddingTop:10,
        paddingBottom:10,
        marginVertical: 5,
        marginBottom:20,
        marginHorizontal: 10,
       
      },
      letra: {
        color:'#fff',
        fontSize:15,
      }
  });


