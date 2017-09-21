
import {playMode} from 'common/js/config'   //播放模式配置文件

const state = {
	disc : {},
	sequenceList : [],  //热门歌单列表
	mode: playMode.sequence,   //播放序号
	fullScreen: false,
	playlist : [],   //播放列表
	currentIndex: -1,
	playing : false
}

export default state