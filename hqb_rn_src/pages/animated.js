import React, { Component } from 'react';
import {
	Modal,//引入modal组件，用于遮罩
	TouchableHighlight,
	Animated,
	Easing,
	Image,
  	StyleSheet,
  	Text,
  	Button,
  	View,
} from 'react-native';
//整个遮罩组件
class ModalExample extends Component{
	constructor(props){
		super(props);
		this.state={modalVisible:false};
	}
	setModalVisible(visible){
		this.setState({modalVisible:visible})
	}
	render(){
		return(
			<View>
				<Modal
					animationType={"slide"}
					transparent={false}
					visible={this.state.modalVisible}
					onRequestClose={()=>{alert("modal has been closed.")}}
				>
					<View>
						<Text>Hello world</Text>
						<TouchableHighlight onPress={()=>{
							this.setModalVisible(!this.state.modalVisible)
						}}>
							<Text>hide Modal</Text>
						</TouchableHighlight>
					</View>
				</Modal>
				<TouchableHighlight onPress={()=>{
					this.setModalVisible(true)
				}}>
					<Text>show Modal</Text>
				</TouchableHighlight>
			</View>
		)
	}
}
//animated组件
class RotateView extends Component{
	constructor(props){
		super(props);
		this.state = {
			fadeAnim:new Animated.Value(0),
			rotateVal:new Animated.Value(0),
		}
	}
	componentDidMount(){
		const Loading = Animated.timing(
			this.state.rotateVal,
			{
				toValue:360,
				duration:2000,
				easing:Easing.linear,
			}
		).start();
		//Loading.start(Loading.start());//循环执行
	}
	render(){

		return(
			<Animated.View style={{width:20,height:20,transform:[{
				rotate:this.state.rotateVal.interpolate({
					inputRange:[0, 360],
					outputRange:['0deg','360deg'],
				})
			}]}}>
				<Image style={styles.icon} source={require('../components/tab/ic_tab_lists_active.png')}></Image>
			</Animated.View>
		)
	}
}
export default class AnimatedScreen extends Component{
  	static navigationOptions = ({navigation})=>{
  		return{
  			title: navigation.getParam('title','Animated'),
  			headerTitleStyle:{
  				fontWeight:'bold'
  			}
  		}
  	}
  	render(){
  		return(
  			<View>
  				<Text>这个页面测试animated</Text>
  				<RotateView style={{width:250,height:50,backgroundColor:'powderblue'}}>
  					<Text style={{fontSize:28,textAlign:'center', margin:10}}>Fading in</Text>
  				</RotateView>
  				<ModalExample/>
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
  	},
	icon:{
		width:20,
		height:20
	}
});