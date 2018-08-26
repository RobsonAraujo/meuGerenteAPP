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
import Saldo from './src/saldo'
import { Image } from 'react-native'


const Navigator = createStackNavigator({
  /*Login: {
    screen: Login,
      navigationOptions: ({ navigation }) => ({
      header : null
    }),
  }, */

  Saldo: {
    screen: Saldo,
    navigationOptions: ({ navigation }) => ({
      headerTitle: (
        <Image source={require('./assets/images/logo.png')} style={{ width: 150, height: 150 }} />
      ),
      headerTransparent: false,
      headerStyle: {
        backgroundColor: '#24B9DF',
        height: 80
      }
    }),
  },
},
  {
    headerLayoutPreset: 'center'
  }
)



export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>

    );
  }
}



