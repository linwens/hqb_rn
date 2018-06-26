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

//网络请求
class FetchSample extends Component {
  render(){
    return (
      <View style={styles.container}>
        <TouchableHighlight
          underlayColor = 'rgb(210,260,260)'
          style={{padding:10,marginTop:10,borderRadius:5,}}
          onPress={this.get}
        >
          <Text>get请求</Text>
        </TouchableHighlight>
      </View>
    )
  }

  //get方法
  get(){
    fetch('http://testh5.huaqiaobao.cn/gatezuul/hqb-activity/worldCup/topEight?appkey=kTjxJFdkA1POnvgg&access_token=46992da6e5f074f251d455598b581d&ts=1529982806&version=3.4.3',{
      method:'GET',
    }).then((response) => response.json())//1
    .then((jsonData) => {//2
        let infoList = jsonData.information_list;
        alert("team_name:" + infoList[2].team_name);
    });
  }
}
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          这里是首页
        </Text>
        <FetchSample />
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
