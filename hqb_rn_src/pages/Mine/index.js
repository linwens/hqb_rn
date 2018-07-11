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
export default class App extends Component{
  static navigationOptions=({navigation})=>{
    return{
      header:null
    }
  }
  render() {
    console.log('storage--------=-=-==-=');
    console.log(storage.cache.userData);
    return (
      <View style={styles.container}>
        <Button
          title="go activity page"
          onPress={()=>this.props.navigation.push('Phone')}
        ></Button>
        <Text style={styles.welcome}>
          这里是我的首页
        </Text>
      </View>
    );
  }
}

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
