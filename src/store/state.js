
import {playMode} from 'common/js/config'   //播放模式配置文件

const state = {
	disc : {},
	sequenceList : [],  //专辑列表
	mode: playMode.sequence,   //播放序号
	fullScreen: false,
}

export default state