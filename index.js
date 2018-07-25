/*
Tarun Shashank
https://www.stnsaishashank.com
splash screen
*/

import React, {
  Component,
} from 'react';
import {
  AppRegistry,
} from 'react-native';
import App from './App';
import Splash from './Screens/Splash';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: 'Splash',
    };
    // console.log('Started loading some task');
    setTimeout(() => {
      //   console.log('Done some tasks for about 3 seconds');
      this.setState({
        currentScreen: 'App',
      });
    }, 1500);
  }

  render() {
    const {
      currentScreen,
    } = this.state;
    const mainScreen = currentScreen === 'Splash' ? <Splash /> : <App />;
    return mainScreen;
  }
}

AppRegistry.registerComponent('dharamshalafoods', () => Main);
