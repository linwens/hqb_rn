import React, { Component } from 'react';
import {
	FlatList,
  	StyleSheet,
  	Image,
  	Text,
  	Button,
  	View,
} from 'react-native';

export default class FlatListBasics extends Component{
	constructor(props){
		super(props);
		this.state = {
			page:1,
			onEndReachedThreshold:0.1,//滑动到底部触发时间
			data:[]
		}
	}
	//设置导航栏
	static navigationOptions = ({navigation})=>{
		return {
			title:navigation.getParam('title','InvestList'),
			headerTitleStyle:{
				fontWeight:'bold',
			}
		}
	}
	//定义item块内容
	_renderItem = (item) => {
		return(
			<View style={{width:380,height:110,marginTop:18,paddingHorizontal:14,paddingBottom:14,backgroundColor:'#fff'}} key={item.item.id}>
				<View style={{height:30,justifyContent:'center',borderBottomWidth:2,borderColor:'#aaa',}}>
					<Text style={{fontSize:12,color:'#717171'}}>{item.item.name}</Text>
				</View>
				<View style={{flex:1,flexDirection:'row',justifyContent:'space-around',alignItems:'flex-end'}}>
					<View style={{width:100}}>
						<Text style={{textAlign:'center',fontSize:32,color:'#f54757'}}>{item.item.apr}%</Text>
						<Text style={{textAlign:'center',fontSize:10,color:'#aaa'}}>预期年化收益</Text>
					</View>
					<View style={{width:100}}>
						<Text style={{textAlign:'center',fontSize:24,color:'#555'}}>{item.item.time_limit_day}天</Text>
						<Text style={{textAlign:'center',fontSize:10,color:'#aaa'}}>理财期限</Text>
					</View>
					<View style={{width:100,alignItems:'center'}}>
						<Image style={{width:50,height:60,resizeMode:'contain'}} source={require('../../components/tab/ic_tab_home_active.png')}/>
					</View>
				</View>
			</View>
		)
	}
	//挂载时请求接口
	componentDidMount(){
		this.getData(1);
	}
	//定义请求
	getData(page){
		doAjax('http://testh5.huaqiaobao.cn/rest/borrow','POST',{
		  page:page,
		  page_size:5,
		}).then((jsonData) => {
			console.log('data-------');
			console.log(jsonData.page_info.page);
			console.log('this.state.page');
			console.log(this.state.page);
		    let infoList = jsonData.information_list;
			const nowData = this.state.page===1?[].concat(infoList):this.state.data.concat(infoList);
		    this.setState({
		    	page:page,
		    	data:nowData
		    })
		});
	}
	//刷新数据
	_refreshData = ()=>{
		console.log('下拉刷新啦');
		this.setState({
			page:1,
		},()=>{
			this.getData(1);
		})
	}
	//加载更多
	_moreData = ()=>{
		console.log('加载更多');
		this.setState({
			page:this.state.page+1,
		},()=>{
			this.getData(this.state.page);
		});
	}
	render(){

		return(
			<View style={styles.container}>
				<FlatList
					data={this.state.data}
					renderItem={this._renderItem}
					onRefresh={this._refreshData}
					refreshing={false}
					onEndReached={this._moreData}
					onEndReachedThreshold={this.state.onEndReachedThreshold}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  	container: {
   		flex: 1,
   		alignItems:'center',
   		backgroundColor:'#f8f2f2',
  	},
  	item: {

  	},
})