import React, {Component} from 'react'
import {
	Modal,
    WebView,
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    TouchableOpacity,
    Dimensions,//本模块用于获取设备屏幕的宽高
} from 'react-native';

const {width,height} = Dimensions.get('window');
//定义一个分享按钮
class Share extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<Button
				onPress={()=>{
					console.log(this.props);
					this.props.onClick(this.props.curStack)
				}}
				title="share"
				color="#eee"
			/>
		)
	}
}
//分享弹窗
class ShareModal extends Component{
	constructor(props){
		super(props)
	}
	render(){

		return(
			<Modal
				animationType={'slide'}
				transparent={true}
				visible={this.props.visible}
				onRequestClose={()=>{console.log('modal已关闭')}}
			>
				<TouchableOpacity style={{flex:1,justifyContent:'flex-end',alignItems:'center',backgroundColor:'rgba(0,0,0,0.3)'}} onPress={()=>{this.props.onClick(this.props.self)}}>
					<View style={{width:width,height:100,backgroundColor:'#FAFAFA'}}>
						<View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
							<Image style={{width:50,height:50}} source={require('./share/socialize_sina.png')} />
							<Image style={{width:50,height:50}} source={require('./share/socialize_wechat.png')} />
							<Image style={{width:50,height:50}} source={require('./share/socialize_wxcircle.png')} />
						</View>
					</View>
				</TouchableOpacity>
			</Modal>
		)
	}
}
export default class hqbWebview extends Component{
	constructor(props){
		super(props);
		this.state={
			shareModal:false,//显示隐藏分享弹窗
		}
	}
	taggleShareModal(self=this){
		console.log('进入taggleShareModal');
		console.log(self);//+?/因为点击的方法经过navigation一层，this无法再指向hqbWebview，所以再传了一次props给Share函数，使得taggleShareModal方法中的this很难看。
		console.log(self.state);
		//显示分享弹窗
		self.setState({
			shareModal:!self.state.shareModal
		})
	}
	static navigationOptions= ({navigation})=>{
		console.log('navigation.state.params--------');
		console.log(navigation.state.params);
		return{
			headerRight:<Share curStack={navigation.state.params.self} onClick={navigation.state.params?navigation.state.params.sharePress:null}/>
		}
	}
	//动态的添加点击事件
	componentDidMount(){
		this.props.navigation.setParams({
			self:this,
	        sharePress:this.taggleShareModal//把点击事件插入到navigation的param中
	    })
	}
	render(){
		let {navigation} = this.props;
		let url = navigation.getParam('url');//获取作为参数的URL
		return(
			<View style={styles.container}>
				<WebView
					style={{width:width,height:height}}
					source={{uri:url,method:'GET'}}
					javaScriptEnabled={true}
					domStorageEnabled ={true}
					scalesPageToFit={false}
				/>
				<ShareModal self={this} visible={this.state.shareModal} onClick={this.taggleShareModal}/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'rgba(255,255,255,1)'
	}
})