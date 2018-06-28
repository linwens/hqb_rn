/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

//引入项目组件
import { createStackNavigator } from 'react-navigation';
//用到的页面
import ActiveScreen from '../pages/active'
import MineScreen from '../pages/Mine/index'

//把这组导航路由塞给main
export default createStackNavigator({
  Mine:MineScreen,
  Activity:ActiveScreen,
},{
  initialRouteName:'Mine',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#39EBF4',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
