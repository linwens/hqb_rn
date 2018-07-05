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
import Loading from './hqb_rn_src/components/Loading'//引入loading组件
type Props = {};

//定义开关loading的全局方法，使得所有组件可以调用
global.showLoading = null;
global.closeLoading = null;
export default class App extends Component<Props> {
  constructor(props){
    super(props)
    this.loading = null;//用来存放Loading组件实例中的方法，通过ref属性
  }
  componentDidMount(){
    global.showLoading = ()=>{
      this.loading.show();//show、close方法定义在loading组件里
    }
    global.closeLoading = ()=>{
      this.loading.close();
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Main />
        <Loading ref={(r)=>{this.loading = r}} isVisible={false}/>{/*isVisible让loading初始化隐藏*/}
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
