/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './src/store'
import { createStackNavigator } from 'react-navigation'
import Login from './src/login'

const Navigator = createStackNavigator({
  Profile: {
    screen: Login
  }
});


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>

    );
  }
}



