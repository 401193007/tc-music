import originJsonp from 'jsonp'


export default function jsonp(url,data,option){
	url += (url.indexOf('?') < 0? '?' : '&') + param(data)


	//拿到数据后返回一个promise
	return new Promise((resolve,reject)=>{

		originJsonp(url,option,(err,data)=>{
			if(!err){
				resolve(data)
			}else{
				reject(err)
			}
		});
	});
}

// encodeURIComponent 转码URL参数

export function param(data){
	let url = '';
	for(let k in data){
		let value = data[k] !== undefined ? data[k] :''
		url += '&' + k + '=' + encodeURIComponent(value)
	}
	return url ? url.substring(1) : ''
}