import {commonParams} from './config'
import axios from 'axios'

export function getLyric(mid){
	const url = '/api/lyric'

	const data = Object.assign({}, commonParams, {
		songmid: mid,
		platform: 'yqq',
		hostUin: 0,
		needNewCode: 0,
		categoryId: 10000000,
		pcachetime: +new Date(),
		format: 'json'
	})

	return axios.get(url, {
		params: data
	}).then((res) => {
		return new Promise(function(resolve,reject){
			resolve(res.data)
		})
	})

}