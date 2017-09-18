import * as types from './mutation-types'  //同步提交mutation api
import {playMode} from 'common/js/config'   //播放模式配置文件
import {shuffle} from 'common/js/util'     //全局随机播放

/**
 * 选择播放
 * @param vuex对象
 * @param 使用该函数时的对象
 */


//返回满足回调函数中指定的测试条件的第一个数组元素的索引值。
function findIndex(list, song) {
	return list.findIndex((item) => {
		return item.id === song.id
	})
}

export const selectPlay = function ({commit, state}, {list, index}) {

	commit(types.SET_SEQUENCE_LIST, list)  //同步更新数据到state

	//如果播放模式为随机播放
	if (state.mode === playMode.random) {
		let randomList = shuffle(list)   //准备随机播放列表
		commit(types.SET_PLAYLIST, randomList)    //提交到全局播放列表
		index = findIndex(randomList, list[index])  //找出索引值
	} else {
		commit(types.SET_PLAYLIST, list)
	}

	commit(types.SET_CURRENT_INDEX, index)   //当前播放索引
	commit(types.SET_FULL_SCREEN, true)      //播放条是否满屏
	commit(types.SET_PLAYING_STATE, true)    //播放状态
}