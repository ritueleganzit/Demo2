import React,{Component} from 'react';
import{StyleSheet,Text,View,Image,TouchableWithoutFeedback,StatusBar,
TextInput,SafeAreaView,Keyboard,TouchableOpacity,KeyboardAvoidingView,Button} from 'react-native'

export default class Login extends Component
{
    render(){
        return( <View style={styles.container}>
            <TextInput
              placeholder={'Username'}
              style={styles.input}
            />
            <TextInput
              placeholder={'Password'}
              secureTextEntry={true}
              style={styles.input}
            />
            
            <Button
              title={'sas'}
              style={styles.input}
            />
          </View>
        
            
            )
    }
}

    
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    },
    input: {
      width: 200,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 10,
    },
  });