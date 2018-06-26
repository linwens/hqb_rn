//封装网络请求的方法 added by lws 20180626
const doAjax = {
	//定义get方法
	static get(url,param,header){
		return new Promise((resolve, reject)=>{
			fetch(url,{
				method:'GET',
				header:header
			}).then((response) => {
				//数据整理
				return response.json()
			}).then(response=>{
				//数据返回
			  	resolve(response)
			}).catch(err=>{
				//错误处理
			  	reject(err)
			})
		});
	}
	//定义post方法


}

//将方法放到全局
global.doAjax = doAjax;