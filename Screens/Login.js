import React, { Component } from 'react'
import { 
    StyleSheet,
    View,
    Text,
    ImageBackground
} from 'react-native';

export class Login extends Component {

    static navigationOptions = {
        header: null
   }

  render() {
    return (
      <View style={{flex:1}}>
        <ImageBackground
        source= {require('../assets/login_bg.jpg')}
        style={{flex: 1}}
        >
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <View style={{backgroundColor: 'white', height: 100, width: 200,  alignItems:'center', justifyContent:'center'}}>
                    <Text style={{fontWeight:'bold', fontSize:26}}>Dharamshala</Text>
                    <Text style={{fontWeight:'bold', fontSize:26}}>Foods </Text>    
                </View>
            </View>
        </ImageBackground>
      </View>
    )
  }
}

export default Login;

const styles = StyleSheet.create({
   container: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center'
   }
});


