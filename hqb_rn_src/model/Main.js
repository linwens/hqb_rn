//引入外部文件
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

//引入第三方库
import TabNavgator from 'react-native-tab-navigator'//可以作废
import { createBottomTabNavigator } from 'react-navigation';
//引入项目组件
import Home from './Home'
import Invest from './Invest'
import Mine from './Mine'

export default createBottomTabNavigator({
	Home:Home,
	Invest:Invest,
	Mine:Mine,
},{
	initialRouteName:'Home',
	navigationOptions:({navigation})=>{
		return {
			tabBarOptions:{//设置tab样式
			  activeTintColor: '#e91e63',
			  labelStyle: {
			    fontSize: 12,
			  },
			  style:{
			  	height:navigation.state.index>0?0:50 //根据当前路由的index值显示tab;当在最外层路由时，显示tab
			  }
			},
			tabBarIcon:({focused})=>{//设置tab icon
				const {routeName}=navigation.state;
				let src = null;
				switch(routeName){
					case 'Home':src=focused?require('../components/tab/ic_tab_home_active.png'):require('../components/tab/ic_tab_home_normal.png')
						break;
					case 'Invest':src=focused?require('../components/tab/ic_tab_lists_active.png'):require('../components/tab/ic_tab_lists_normal.png')
						break;
					case 'Mine':src=focused?require('../components/tab/ic_tab_mine_active.png'):require('../components/tab/ic_tab_mine_normal.png')
						break;
					default:break;
				}
				return <Image style={styles.icon} source={src} />;
			}
		}
	}
})

//设置样式
const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#fff'
	},
	tabText:{
		color:'#000',
		fontSize:10
	},
	curTabText:{
		color:'red'
	},
	icon:{
		width:20,
		height:20
	}
});