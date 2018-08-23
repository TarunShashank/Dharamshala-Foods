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
import { Icon } from 'native-base';
import { SocialIcon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';


const SCREEN_HEIGHT = Dimensions.get('window').height;

export class Login extends Component {
    ShowMaxAlert = (EnteredValue) => {
      const TextLength = EnteredValue.length.toString();

      if (TextLength == 10) {

        //  Alert.alert("Sorry, a phone number can have only 10 digits.")
        // Put your code here which you want to execute when TextInput entered text reached to 10.

      }
    }


    static navigationOptions = {
      header: null,
    }

    constructor() {
      super();

      this.state = {
        placeholderText: 'Enter your mobile number',
      };
    }

    componentWillMount() {
      this.loginHeight = new Animated.Value(150);

      this.socialHeight = new Animated.Value(120);

      this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);

      this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);

      this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow);

      this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide);

      this.keyboardHeight = new Animated.Value(0);
      this.forwardArrowOpacity = new Animated.Value(0);
      this.borderBottomWidth = new Animated.Value(0);
    }

   keyboardWillShow = (event) => {
     if (Platform.OS == 'android') {
       duration = 100;
     } else {
       duration = event.duration;
     }

     Animated.parallel([

       Animated.timing(this.keyboardHeight, {
         duration: duration + 100,
         toValue: event.endCoordinates.height,
       }),
       Animated.timing(this.forwardArrowOpacity, {
         duration,
         toValue: 1,
       }),
       Animated.timing(this.borderBottomWidth, {
         duration,
         toValue: 1,
       }),

     ]).start();
   }

keyboardWillHide = (event) => {
  if (Platform.OS == 'android') {
    duration = 100;
  } else {
    duration = event.duration;
  }

  Animated.parallel([

    Animated.timing(this.keyboardHeight, {
      duration: duration + 100,
      toValue: 0,
    }),
    Animated.timing(this.forwardArrowOpacity, {
      duration,
      toValue: 0,
    }),
    Animated.timing(this.borderBottomWidth, {
      duration,
      toValue: 0,
    }),

  ]).start();
}

   increaseHeightOfLogin = () => {
     this.setState({ placeholderText: '092123456789' });
     Animated.timing(this.loginHeight, {
       toValue: SCREEN_HEIGHT + 10,
       duration: 500,
     }).start(() => {
       this.refs.textInputMobile.focus();
     });
   }

    decreaseHeightOfLogin = () => {
      Keyboard.dismiss();
      Animated.timing(this.loginHeight, {
        toValue: 150,
        duration: 500,
      }).start();
    }

    increaseHeightOfSocialLogin = () => {
      // this.setState({ placeholderText: '092123456789' })
      Animated.timing(this.socialHeight, {
        toValue: SCREEN_HEIGHT + 10,
        duration: 500,
      }).start();
    }

    decreaseHeightOfSocialLogin = () => {
      Animated.timing(this.socialHeight, {
        toValue: 70,
        duration: 500,
      }).start();
    }

    render() {
      const headerTextOpacity = this.loginHeight.interpolate({
        inputRange: [150, SCREEN_HEIGHT],
        outputRange: [1, 0],
      });
      const marginTop = this.loginHeight.interpolate({
        inputRange: [150, SCREEN_HEIGHT],
        outputRange: [25, 100],
      });
      const headerBackArrowOpacity = this.loginHeight.interpolate({
        inputRange: [150, SCREEN_HEIGHT],
        outputRange: [0, 1],
      });
      const titleTextLeft = this.loginHeight.interpolate({
        inputRange: [150, SCREEN_HEIGHT],
        outputRange: [100, 25],
      });
      const titleTextBottom = this.loginHeight.interpolate({
        inputRange: [150, 400, SCREEN_HEIGHT],
        outputRange: [0, 0, 100],
      });
      const titleTextOpacity = this.loginHeight.interpolate({
        inputRange: [150, SCREEN_HEIGHT],
        outputRange: [0, 1],
      });


      
      


      return (
        <View style={{ flex: 1 }}>

          <Animated.View
            style={{
              position: 'absolute',
              height: 60,
              width: 60,
              top: 60,
              left: 25,
              zIndex: 100,
              opacity: headerBackArrowOpacity, // animated
            }}
          >
            <TouchableOpacity
              onPress={() => this.decreaseHeightOfLogin() ||this.decreaseHeightOfSocialLogin()}
            >
              <Icon name="md-arrow-back" style={{ color: 'black' }} />
            </TouchableOpacity>
          </Animated.View>

          

          <Animated.View
            style={{
              position: 'absolute',
              height: 60,
              width: 60,
              right: 10,
              bottom: this.keyboardHeight, // animated
              opacity: this.forwardArrowOpacity, // animated
              zIndex: 100,
              backgroundColor: '#54575e',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 30,
            }}
          >
            <Icon name="md-arrow-forward" style={{ color: 'grey'  }} />
          </Animated.View>

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
                  height: this.loginHeight, // animated
                  backgroundColor: 'white',

                }}
              >
                <Animated.View
                  style={{
                    opacity: headerTextOpacity, // animated
                    alignItems: 'flex-start',
                    paddingHorizontal: 25,
                    marginTop, // animated
                  }}
                >
                  <Text
                    style={{ fontSize: 24, color: 'black' }}
                  >Get Food Delivered Now
                  </Text>
                </Animated.View>

                <TouchableOpacity
                  onPress={() => this.increaseHeightOfLogin()}
                >
                  <Animated.View
                    style={{
                      marginTop, // animated
                      paddingHorizontal: 25,
                      flexDirection: 'row',
                    }}
                  >
                    <Animated.Text
                      style={{
                        fontSize: 24,
                        color: 'gray',
                        position: 'absolute',
                        bottom: titleTextBottom, // animated
                        left: titleTextLeft, // animated
                        opacity: titleTextOpacity, // animated
                      }}
                    >Enter your mobile number
                    </Animated.Text>


                    <Image
                      source={require('../assets/india.png')}
                      style={{
                        height: 24, width: 24, resizeMode: 'contain', paddingVertical: 23,
                      }}
                    />
                    <Animated.View
                      pointerEvents="none"
                      style={{
                        flexDirection: 'row',
                        flex: 1,
                        borderBottomWidth: this.borderBottomWidth, // animated
                      }}
                    >
                      <Text style={{
                        fontSize: 20,
                        paddingHorizontal: 10,
                        paddingVertical: 10,
                        color: 'black',
                      }}
                      >+91
                      </Text>

                      <TextInput
                        keyboardType="phone-pad"
                        ref="textInputMobile"
                        style={{ flex: 1, fontSize: 20 }}
                        placeholder={this.state.placeholderText}
                        underlineColorAndroid="transparent"
                        maxLength={10}
                        onChangeText={EnteredValue => this.ShowMaxAlert(EnteredValue)}
                      />

                    </Animated.View>
                  </Animated.View>
                </TouchableOpacity>

              </Animated.View>
              <Animated.View

                style={{
                  height: this.socialHeight, // animated
                  backgroundColor: 'white',
                  alignItems: 'flex-start',
                  justifyContent: 'space-evenly',
                  borderTopColor: '#e8e8ec',
                  borderTopWidth: 1,
                  paddingHorizontal: 25,
                  opacity: 1, // animated
                 // marginTop: marginSocialTop, // animated

                }}
              >
                <TouchableOpacity
                  onPress={() => this.increaseHeightOfSocialLogin()}
                >
                  <Animated.Text

                    style={{
                      // position: 'absolute',
                      //bottom: socialTextBottom, // animated
                      color: '#5a7fdf',
                      fontWeight: 'bold',
                    }}
                  > Or use a social account
                  </Animated.Text>
                </TouchableOpacity>
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


              </Animated.View>
            </Animatable.View>
          </ImageBackground>

        </View>
      );
    }
}

export default Login;
