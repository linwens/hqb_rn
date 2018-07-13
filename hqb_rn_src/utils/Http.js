//封装网络请求的方法 added by lws 20180626
/**
 *基于axios
 *
**/
import axios from 'axios'
//node-forge用于md5加密
import forge from "node-forge";
// const baseUrl = "http://kaifa.huaqiaobao.cn/";//开发站
const baseUrl = "http://moni.huaqiaobao.cn";//模拟站
// const baseUrl = "https://www.hqblicai.com/";//正式站

const APP_KEY = "42121AAF5F09205A6C56ED5A4CE1A887";
const APP_SECRET = "72789CB4BD41A0DC";
const version = "3.3";
let ts = parseInt(new Date().getTime()/1000); 

/*
 *签名signa = MD5(MD5(appsecret+ts+sign_method+version)+appkey+oauth_token).toUpperCase()
 */
function createSigna(token){
    const md5 = forge.md.md5.create();
    const md = forge.md.md5.create();
    md.update(APP_SECRET + ts + "MD5" + version);
    md5.update(md.digest().toHex() + APP_KEY + token);
    let md5Str = md5.digest().toHex().toUpperCase();
    return md5Str;
};
//创建axios实例
const instance = axios.create({
	headers: {'Content-Type': 'application/x-www-form-urlencoded'},
	timeout:5000,
});
//创建请求拦截器
instance.interceptors.request.use(async (config)=>{
	//在发送请求之前显示loading，设置公共传参
	console.log('---before----');
	console.log(config);
	showLoading();//请求发出，显示loading
    //这里是公共参数：appkey,token,ts,version,放入headers.Authorization
    let oauth_token = await storage.load({//await 等待 Promise 对象的状态被 resolved
        key:'userData',
        syncParams: {
        	extraFetchOptions: {
        	// 各种参数
        	},
        	someFlag: true,
        },
    }).then(ret=>{
    	console.log(ret);
    	return ret.oauth_token;
    }).catch(err=>{
    	console.log(err);
    	return ''
    });
    console.log('oauth_token-=-=-=-=-==-=--');
    console.log(oauth_token);
    // config.headers.Authorization = JSON.stringify({
    //     "oauth_token": oauth_token,//用户token要做redux存储
    //     "appkey":APP_KEY,
    //     "ts": ts,
    //     "version":version,
    //     "signa": createSigna(oauth_token)
    // });
    config.params = Object.assign({
    	"oauth_token": oauth_token,//用户token要做redux存储
    	"appkey":APP_KEY,
    	"ts": ts,
    	"version":version,
    	"signa": createSigna(oauth_token)
    },config.params)
    console.log('---after----');
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
		closeLoading();//响应完成，隐藏loading
		return response.data;
	}
	//下面对返回的数据做统一处理
	closeLoading();//响应完成，隐藏loading
	return response.data;
},(err)=>{
	//响应出错
	return Promise.reject(err);
});
//定义网络请求的公共方法
const doAjax = (url='', type='', params={}, noInter=false)=>{
	return new Promise((resolve, reject)=>{
		instance({
			url:baseUrl+url,
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