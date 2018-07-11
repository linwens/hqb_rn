import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
} from 'react-native';
const {width,height} = Dimensions.get('window');
export default class Login extends Component{
	constructor(props){
		super(props);
	}
	static navigationOptions = ({navigation})=>{
		return{
			title:'会员登录',
			headerTitleStyle:{
				fontWeight: 'bold',
			}
		}
	}
	//提交手机号
	doLogin(text){
		console.log(text);
		let phoneReg=new RegExp(/^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/);
		console.log(phoneReg.test(text));
		if(phoneReg.test(text)){
			//如果匹配手机号提交
			doAjax('/rest/user/exisit','GET',{
			  phone:text,
			}).then((jsonData) => {
			    console.log(jsonData)
			    if(sub_res_code==='10011'){
			    	this.props.navigation.navigate('Details')
			    }
			});
		}
	}
	render(){
		console.log('storage--------=-=register-==-=');
		console.log(storage);
		return(
			<View style={styles.container}>
				<View style={styles.inputBox}>
					<TextInput
						style={styles.input}
						underlineColorAndroid="transparent"
						placeholder='这里是注册页'
						placeholderTextColor='#aaa'
						keyboardType={'numeric'}
					/>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'flex-start',
		alignItems:'center',
		backgroundColor:'#fff',
	},
	inputBox:{
		flexDirection: 'row',
		justifyContent:'flex-start',
		alignItems:'center',
		width: 320,
		height: 50,
		marginTop:20,
		borderRadius: 30,
		borderWidth: 1,
		borderColor: '#e4e4e4',
	},
	input:{
		width:260,
		fontSize: 20,
		color:'#666',
	}
});