//封装网络请求的方法 added by lws 20180626
class doAjax {
	//定义get方法
	static get(url,param,header){
		let sParam = '';//序列换传参
		//传参
		if(param){//只考虑对象一级属性
			//
			let paramArr = [],
				add = (key,val)=>{
					paramArr[paramArr.length] = encodeURIComponent( key ) + "=" + encodeURIComponent( val );
				};
			for(let key in param){
				add(key,param[key]);
			}
			sParam = '?'+paramArr.join('&').replace(/%20/g,'+')//空格转+号
		}
		return new Promise((resolve, reject)=>{
			fetch(url+sParam,{
				method:'GET',
				header:header?header:'',
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
	static post(url,param,header){
		//post方法的body会根据headers中的Content-Type的不同而不同，所以param的格式化目前在调用时完成

		return new Promise((resolve, reject)=>{
			fetch(url,{
				method:'POST',
				header:header?header:'',
				body:param,
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

}

//将方法放到全局
global.doAjax = doAjax;