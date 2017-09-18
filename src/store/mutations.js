import * as types from "./mutation-types"

const mutations = {
	//热门歌单
	[types.SET_DISC](state,disc){
		state.disc = disc
	},
	//专辑列表
	[types.SET_SEQUENCE_LIST](state,list){
		state.sequenceList = list
	}
}

export default mutations