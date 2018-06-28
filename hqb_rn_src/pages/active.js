import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';

//navigator设置
export default class ActiveScreen extends Component{
  static navigationOptions = ({navigation})=>{
    return {
      title: navigation.getParam('title','Activity'),
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
          onPress={()=>this.props.navigation.push('Activity',{
            title:'Activity2'
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }
});