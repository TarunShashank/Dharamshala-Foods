import React, { Component } from 'react'
import { 
    StyleSheet,
    View,
    Text
} from 'react-native';

export class Login extends Component {

    static navigationOptions = {
        header: null
   }

  render() {
    return (
      <View style={styles.container}>
        <Text>LoginScreen</Text>
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


