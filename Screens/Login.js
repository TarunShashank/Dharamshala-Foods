import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
  Animated,
  Dimensions,
  Keyboard,
  // Alert,
  Platform,
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import { SocialIcon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';




 export default class Login extends Component {
    

      render(){ 
      return (
        

          <ImageBackground
            source={require('../assets/login_bg.jpg')}
            style={{ flex: 1 }}
          >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Animatable.View
                animation="zoomIn"
                iterationCount={1}
                style={{
                  backgroundColor: 'white', height: 175, width: 175, alignItems: 'center', justifyContent: 'center',
                }}
              >
                <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 27 }}>
                Dharamshala
                </Text>
                <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 27 }}>
                Foods
                </Text>
              </Animatable.View>
            </View>

            {/** BOTTOM HALF * */}
            <Animatable.View animation="slideInUp" iterationCount={1}>

              <Animated.View
                style={{
                  height: 150, // animated
                  backgroundColor: 'white',

                }}
              >
                <Animated.View
                  style={{
                    opacity: 1, // animated
                    alignItems: 'flex-start',
                    paddingHorizontal: 25,
                    // animated
                  }}
                >
                  <Text
                    style={{ fontSize: 24, color: 'black' }}
                  >Get Food Delivered Now
                  </Text>
                </Animated.View>
              </Animated.View>
                
                  <Animated.View
                    style={{
                      // animated
                      paddingHorizontal: 25,
                      flexDirection: 'row',
                    }}
                  >

                    
                    <Animated.View
                      pointerEvents="none"
                      style={{
                        flexDirection: 'row',
                        flex: 1,
                        borderBottomWidth: 0.5, // animated
                      }}
                    >
                      
                      

                  </Animated.View>

              </Animated.View>
              >
                {/* <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('otp') }
                > 
                  
                </TouchableOpacity> */}
              


              </Animatable.View>
          </ImageBackground>


      )

    }

  }


 {/* <Animated.View
                                        style={{
                                        flexDirection: 'row',
                                        }}
                                    >

                                    <SocialIcon
                                        title= 'Facebook'
                                        button
                                        type='facebook'
                                    />
                                    <SocialIcon
                                        title='Google'
                                        button
                                        type= 'google-plus-official'
                                    />

                </Animated.View> */}