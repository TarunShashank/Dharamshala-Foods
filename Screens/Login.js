import React, { Component } from 'react'
import { 
    StyleSheet,
    View,
    Text,
    ImageBackground
} from 'react-native';
import { Fonts } from '../src/utils/Fonts';

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
                    <Text style={{fontFamily: Fonts.Pacifico, fontWeight:'bold', fontSize:30}}>Dharamshala</Text>
                    <Text style={{fontFamily: 'Pacifico', fontWeight:'bold', fontSize:30}}>Foods </Text>    
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


