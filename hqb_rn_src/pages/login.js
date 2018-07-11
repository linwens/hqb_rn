import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Dimensions,
  ToastAndroid,
} from 'react-native';
const {width,height} = Dimensions.get('window');
export default class Login extends Component{
	constructor(props){
		super(props);
		this.state={
			phone:this.props.navigation.getParam('phone'),
			pwd:null,
		}
	}
	static navigationOptions = ({navigation})=>{
		return{
			title:'会员登录',
			headerTitleStyle:{
				fontWeight: 'bold',
			}
		}
	}
	//提交登录
	doLogin(){
		//如果匹配手机号提交
		doAjax('/app/oauth/oauth_token.html','POST',{
		  phone:this.state.phone,
		  password:this.state.pwd,
		}).then((jsonData) => {
			console.log(jsonData);
		    if(jsonData.res_code==="1"){
		    	storage.save({
		    		key:'userData',
		    		data:{
		    			oauth_token:jsonData.information.oauth_token,
		    			uid:jsonData.information.uid,
		    			expires_in:jsonData.information.expires_in,
		    		},
		    		expires:1000*120
		    	});
		    	this.props.navigation.navigate('Mine')
		    }else{
		    	ToastAndroid.show(jsonData.res_msg,ToastAndroid.SHORT);
		    }
		});
	}
	//
	inputPwd(text){
		this.setState({
			pwd:text,
		})
	}
	render(){
		return(
			<View style={styles.container}>
				<View style={styles.inputBox}>
					<TextInput
						style={styles.input}
						underlineColorAndroid="transparent"
						placeholder={this.state.phone}
						editable={false}
						placeholderTextColor='#aaa'
						keyboardType={'numeric'}
					/>
				</View>
				<View style={styles.inputBox}>
					<TextInput
						style={styles.input}
						onChangeText={(text)=>{this.inputPwd(text)}}
						underlineColorAndroid="transparent"
						secureTextEntry={true}
						placeholder='请输入登录密码'
						placeholderTextColor='#aaa'
						keyboardType={'default'}
					/>
				</View>
				<View style={styles.forget}>
					<Text style={{fontSize:16,color:'#0072ff',}}>忘记密码?</Text>
				</View>
				<TouchableOpacity
					style={styles.subBtnBox}
					onPress={()=>{this.doLogin()}}
				>
					<Text style={{fontSize:20,color:'#fff',}}>登录</Text>
				</TouchableOpacity>
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
		height: 60,
		marginTop:20,
		borderRadius: 30,
		borderWidth: 1,
		borderColor: '#e4e4e4',
	},
	input:{
		width:260,
		fontSize: 20,
		color:'#666',
	},
	forget:{
		width:320,
		height:30,
		flexDirection: 'row',
		justifyContent:'flex-end',
		alignItems:'center',
		marginTop:20,
		marginBottom:20,
	},
	subBtnBox:{
		width:320,
		height:60,
		flexDirection: 'row',
		justifyContent:'center',
		alignItems:'center',
		borderRadius: 30,
		marginTop:20,
		backgroundColor:'#e83c36',
	}
});