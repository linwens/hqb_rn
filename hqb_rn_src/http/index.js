//封装网络请求的方法 added by lws 20180626
/**
 *基于axios
 *
**/
import axios from 'axios'

const instance = axios.create({
	headers: {'Content-Type': 'application/x-www-form-urlencoded'},
	timeout:5000,
});
//创建请求拦截器
instance.interceptors.request.use((config)=>{
	//在发送请求之前
	console.log(config);
	return config;
},(err)=>{
	//请求出错时
	return Promise.reject(err);
});
//创建响应拦截器
instance.interceptors.response.use((response)=>{
	//正常响应
	console.log(response);
	/**
	 *这么一种情况：根据返回的code字段做统一处理，特殊的接口请求要对同一个code做特殊的处理就把custom设为true
	**/
	if(response.config.custom){//这里对返回数据做自定义处理
		console.log('-------进来自定义处理啦');
		return response.data;
	}
	//下面对返回的数据做统一处理
	return response.data;
},(err)=>{
	//响应出错
	return Promise.reject(err);
});
//定义网络请求的公共方法
const doAjax = (url='', type='', params={}, noInter=false)=>{
	return new Promise((resolve, reject)=>{
		instance({
			url:url,
			method:type,
			params:params,
			custom:noInter,//接口走通情况下不走统一处理，自定义处理方法 Bealoon
		}).then(response=>{
			//数据返回
		  	resolve(response)
		}).catch(err=>{
			//错误处理
		  	reject(err)
		})
	});
}

//将方法放到全局
global.doAjax = doAjax;