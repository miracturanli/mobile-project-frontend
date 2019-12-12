import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Router from './src/Router';
import { Provider } from 'mobx-react';
import store from './src/store';
import NavigationService from './src/NavigationService';
export default class App extends Component {
  render() {
    return (
      <Provider {...store}>
        <Router
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        ></Router>
      </Provider>
    );
  }
}
