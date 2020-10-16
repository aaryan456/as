import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer'
import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/ExchangeScreen';
import ExchangeScreen from './screens/MainScreen';

export default class App extends React.Component {
  render() {
   return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator({
  MainScreen: { screen: MainScreen },
  ExchangeScreen: { screen: ExchangeScreen },
},

);

const AppNavigator = createSwitchNavigator({
  LoginScreen:{screen:LoginScreen},
  TabNavigator : {screen : TabNavigator}
})

const AppContainer = createAppContainer(AppNavigator);