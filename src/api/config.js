export const commonParams = {
	g_tk: 1928093487,
	inCharset: 'utf-8',
	outCharset: 'utf-8',
	notice: 0,
	format: 'jsonp'	
}

export const options = {
	param: 'jsonpCallback'
}
// 仔细阅读一下第三方库jsonp，里面的opts是一个对象，prefix属性表示callback返回的名字，即传参时候的val值，默认是"__jp",param属性表示的是传参时候的key值。
export const options1 = {
	param: 'jsonpCallback',
	prefix: 'playlistinfoCallback'	
}

export const ERR_OK = 0