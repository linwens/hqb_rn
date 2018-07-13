/**
 * 用于配置Home模块下的路由信息
**/

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
import HomeScreen from '../pages/Home/index'
import AnimatedScreen from '../pages/animated'
import WebviewScreen from '../components/Webview'
//把这组导航路由塞给main
export default createStackNavigator({
  Home:HomeScreen,
  Activity:ActiveScreen,
  Animated:AnimatedScreen,
  Webview:WebviewScreen,//webview
},{
  initialRouteName:'Home',
  navigationOptions: {
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
