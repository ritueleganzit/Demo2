import React,{Component} from 'react'
import {StyleSheet,Text,View} from 'react-native'
export default class Splash extends Component
{
    render(){
        return(
            <View style={styles.container}>
<Text style={styles.titles}>Hello World</Text>
            </View>
        )
    }
}
const styles =StyleSheet.create({
    container:{
        backgroundColor: 'black',
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
    },
    titles:{
       fontSize:18,
       fontWeight:'bold',
       color:'white'
    }
})