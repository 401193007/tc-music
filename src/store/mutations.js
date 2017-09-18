import * as types from "./mutation-types"

const mutations = {
	//热门歌单
	[types.SET_DISC](state,disc){
		state.disc = disc
	},
	//专辑列表
	[types.SET_SEQUENCE_LIST](state,list){
		state.sequenceList = list
	},
	//播放列表
	[types.SET_PLAYLIST](state, list) {
		state.playlist = list
	},	
	//播放状态
	[types.SET_PLAYING_STATE](state, flag) {
		state.playing = flag
	},	
	//播放序号
	[types.SET_CURRENT_INDEX](state, index) {
		state.currentIndex = index
	},	
	//播放模式
	[types.SET_PLAY_MODE](state, mode) {
		state.mode = mode
	},	
	//是否全屏播放
	[types.SET_FULL_SCREEN](state, flag) {
		state.fullScreen = flag
	},	
}

export default mutations