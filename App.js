/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  YellowBox,//隐藏isMounted(...)警告的提示，彻底根除要等到RN下一个版本 https://github.com/facebook/react-native/issues/18868
} from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])
//import RootStack from './hqb_rn_src/nav';
//引入项目组件
import Main from './hqb_rn_src/model/Main';
import HTTP from './hqb_rn_src/http';//为了能使用global里的方法
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Main></Main>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }
});
