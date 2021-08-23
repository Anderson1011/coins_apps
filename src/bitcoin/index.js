import React, {Component, useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import api from '../services/api';

class Bitcoin extends Component{
    constructor (){
      super();

        this.state ={
            vbitcoin: 0
        }
        this.consultaPrecoBitcoin = this.consultaPrecoBitcoin.bind(this);    
    }
    async componentDidMount (){
const response = await api.get('ticker');

let valor = response.data.CAD['buy'];
this.setState({
    vbitcoin: valor
});

    }
    async consultaPrecoBitcoin (){
        const response = await api.get('ticker');
        
        let valor = response.data.BRL['buy'];
        this.setState({
            vbitcoin: valor
        });
        alert ('Preço atualizado!');
}
 render(){

    return(
   <View style={styles.container}>
       <Image
       source={require('/../../assets/bitcoin.png')} style={{width:450, height:169}} resizeMode='center'/>
       <Text style ={styles.textoBitcoin}> R$ {this.state.vbitcoin} </Text>

       <TouchableOpacity style ={styles.botao} onPress={this.consultaPrecoBitcoin}>
       <Text style={styles.textoBotao}> Atualizar</Text>

       </TouchableOpacity>
   </View>

    );
 }
}
export default Bitcoin;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textoBitcoin:{
        fontSize:32,
        color: '#0000FF'
    },
   
    botao:{
        backgroundColor: '#FFFF00',
        marginTop:50,
        width:300,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50
    },
    textoBotao:{
        fontSize:32,
        color: '#FF0000'
    }
});