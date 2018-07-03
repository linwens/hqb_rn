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
  Button,
  View,
  TouchableHighlight
} from 'react-native';

//引入项目组件
import { createStackNavigator } from 'react-navigation';
//用到的页面
import ActiveScreen from '../pages/active'
import InvestScreen from '../pages/Invest/index'
import InvestList from '../pages/Invest/bidList'
//
export default createStackNavigator({
  Invest:InvestScreen,
  Activity:ActiveScreen,
  InvestList:InvestList,//标列表
},{
  initialRouteName:'Invest',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
})

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
