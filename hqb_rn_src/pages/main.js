//引入外部文件
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

//引入第三方库
import TabNavgator from 'react-native-tab-navigator'
//引入项目组件
import Home from './Home'
import Invest from './Invest'
import Mine from './Mine'
//定义组件内容
export default class Main extends Component {
	constructor(props){
		super(props);
		this.state = {
			curTab:'首页'
		}
	}
	//写一些方法或是其他

	//渲染
	render(){
		//tab文案
		let tabText = ['首页','投资','我的'];
		return(
			//组件
			<View style={styles.container}>
				<TabNavgator>
					<TabNavgator.Item
						selected={this.state.curTab==='首页'}
						title='首页'
						titleStyle={styles.tabText}
                        selectedTitleStyle={styles.curTabText}
                        onPress={()=>this.setState({ curTab: '首页' })}
					>
						<Home />
					</TabNavgator.Item>
					<TabNavgator.Item
						selected={this.state.curTab==='投资'}
						title='投资'
						titleStyle={styles.tabText}
                        selectedTitleStyle={styles.curTabText}
                        onPress={()=>this.setState({ curTab: '投资' })}
					>
						<Invest />
					</TabNavgator.Item>
					<TabNavgator.Item
						selected={this.state.curTab==='我的'}
						title='我的'
						titleStyle={styles.tabText}
                        selectedTitleStyle={styles.curTabText}
                        onPress={()=>this.setState({ curTab: '我的' })}
					>
						<Mine />
					</TabNavgator.Item>
				</TabNavgator>
			</View>
		)
	}
}

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