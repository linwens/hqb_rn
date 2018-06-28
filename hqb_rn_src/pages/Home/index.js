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
//网络请求
class FetchSample extends Component {
  render(){
    return (
      <TouchableHighlight
        underlayColor = 'rgb(210,260,260)'
        style={{padding:10,marginTop:10,borderRadius:5,}}
        onPress={this.get}
      >
        <Text>get请求</Text>
      </TouchableHighlight>
    )
  }

  //get方法
  get(){
    doAjax.get('http://testh5.huaqiaobao.cn/gatezuul/hqb-activity/worldCup/topEight',{
      appkey:'kTjxJFdkA1POnvgg',
      access_token:'46992da6e5f074f251d455598b581d',
      ts:1529982806,
      version:'3.4.3'
    }).then((jsonData) => {
        let infoList = jsonData.information_list;
        alert("team_name:" + infoList[2].team_name);
    });
  }
}

export default class App extends Component{
  static navigationOptions=({navigation})=>{
    return{
      header:null
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="go activity page"
          onPress={()=>this.props.navigation.push('Activity')}
        ></Button>
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
});
