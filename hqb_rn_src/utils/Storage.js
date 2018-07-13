import {AsyncStorage} from 'react-native';
import Storage from 'react-native-storage';
let storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000*300,//设置默认过期时间,具体数据可在save的时候通过expires自定义过期时间
  enableCache: true,
});
//编写sync方法,用于处理当storage中没有相应数据，或数据已过期时调用，返回最新数据
storage.sync={
  	//如果本地并没有存储相应的userData，那么会自动触发storage.sync.userData
  	userData(params){
  		let { id, resolve, reject, syncParams: { extraFetchOptions, someFlag } } = params;
  		console.log('params=-=-=-====--====');
  		console.log(JSON.stringify(params));
  		storage.save({
  			key:'userData',
  			data:{
  				oauth_token:'',
  				uid:'',
  				expires_in:0,
  			},
  		});
  		if(someFlag){//是否有额外参数
  			console.log('-----看看navi----');
  		}
  	}
}
global.storage = storage;