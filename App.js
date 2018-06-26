import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {StackNavigator} from 'react-navigation'

export default class App extends Component {
  render() {
    return (
     <AppStackNavigator/>
    );
  }
}

const AppStackNavigator =StackNavigator ({
  LoginScreen : { screen : Login}
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
