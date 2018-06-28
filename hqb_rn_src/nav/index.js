import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

//navigator设置
class HomeScreen extends Component<Props>{
  static navigationOptions = ({navigation})=>{
    return{
        title:'Home',
        headerRight: (
            <Button
             onPress={ navigation.getParam('increaseCount')}
             title="+1"
             color="#000"
            />
        ),
    }
  }
  componentDidMount() {//componentDidMount是react的生命周期钩子函数
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }
  state = {
    count: 0,
  };

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render(){
    return(
      <View style={styles.container}>
        <Text>
            HomeScreen
        </Text>
        <Button
          title="go to Detail"
          onPress={()=>this.props.navigation.navigate('Detail',{
            id:111
          })}
        />
        <Text>increaseCount:{this.state.count}</Text>
      </View>
    )
  }

  
}


class DetailScreen extends Component<Props>{
  static navigationOptions = ({navigation})=>{
    return {
      title: navigation.getParam('title','Detail'),
        headerLeft: (//通过 headerLeft 完全自定义返回按钮
            <Button
             onPress={ () =>navigation.popToTop()}
             title="<"
             color="#000"
            />
        ),
      headerStyle: {
        backgroundColor: 'blue',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
  render(){
    let {navigation} = this.props;
    let id = navigation.getParam('id','0000');
    return(
      <View style={styles.container}>
        <Text>
            DetailScreen
        </Text>
        <Button
          title="go to Detail...again"
          onPress={()=>this.props.navigation.push('Detail',{
            title:'Detail2'
          })}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Text>id:{id}</Text>
      </View>
    )
  }
}
export default createStackNavigator({
  Home:{
    screen:HomeScreen
  },
  Detail:{
    screen:DetailScreen
  },
  initialRouteName:'Home',
},{
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }
});