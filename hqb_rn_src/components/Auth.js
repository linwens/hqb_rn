import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
export default class Auth extends Component{
	constructor(props){
		super(props);
		console.log('auth-=-=-------');
		console.log(this.props);
	}
	render(){
		if(storage.cache.userData&&storage.cache.userData.oauth_token&&storage.cache.userData.oauth_token!=''){
		  	console.log('已登录进来渲染');
		  	return (<View style={styles.container}></View>);
		}else{
			console.log('未登录走phone');
		  	this.props.navigation.replace('Phone',{
		  		backPage:this.props.backPage
		  	});
		  	return false;
		}
	}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});