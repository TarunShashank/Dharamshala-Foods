import React, { Component } from 'react'
import { 
    StyleSheet,
    View,
    Text,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Image
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
            {/*footer */}
            <View>
                <View
                    style={{
                        height: 150,
                        backgroundColor: 'white'
                    }}>

                    <View style={{
                         opacity: 1,
                         alignItems: 'flex-start',
                         paddingHorizontal:25,
                         marginTop: 25
                    }}
                       >
                       <Text style={{ fontSize: 24}}>
                       GET delivered Now
                        </Text>   

                    </View>
                    
                    <TouchableOpacity>
                        <View style={{
                            marginTop: 25,
                            paddingHorizontal:25,
                             flexDirection: 'row'
                        }}>
                            <Image
                                source={require('../assets/india.png')}
                                style={{
                                    height:24,
                                    width: 24,
                                    paddingVertical: 23,
                                    
                                    resizeMode: 'contain'
                                }}
                            />
                                <View style={{
                                    flexDirection: 'row',
                                    flex: 1,
                                }}>
                                    <Text style={{
                                        fontSize: 20,
                                        paddingHorizontal: 10,
                                        paddingVertical: 10
                                    }}
                                    >+91
                                    </Text>

                                    <TextInput style={{
                                        flex:1, fontSize:20}}
                                        placeholder="enter your mobile number "
                                        underlineColorAndroid="transparent"
                                        
                                        />
                                        

                                </View>
                        </View>
                    </TouchableOpacity>

                </View>
                <View
                    style={{
                        height: 70,
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems:'flex-start',
                        borderTopColor:'#e8e8ec',
                        borderWidth: 1,
                        paddingHorizontal: 25,
                    }}>
                    <Text style={{
                        color:'#5a7fdf',
                        fontWeight:'bold'
                    }}>
                        Or connect using a social network
                    </Text>
                
                
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


