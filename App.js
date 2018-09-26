/*
Tarun Shashank
https://www.stnsaishashank.com
splash screen
*/

import React, {
  Component,
} from 'react';
import {
  StyleSheet,
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import Login from './Screens/Login';
import Otp from './Screens/otp';

export default class App extends Component {
  render() {
    return <AppStackNavigator / > ;
  }
}

const AppStackNavigator = StackNavigator(
  {
    Login: Login,
    Otp : Otp,
  },
  {
    initialRouteName: 'Login',
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});