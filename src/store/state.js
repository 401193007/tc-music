
import {playMode} from 'common/js/config'   //播放模式配置文件
import {loadSearch, loadPlay, loadFavorite} from 'common/js/cache'

const state = {
	disc : {},
	sequenceList : [],  //热门歌单列表
	mode: playMode.sequence,   //播放序号
	fullScreen: false,
	playlist : [],   //播放列表
	currentIndex: -1,
	playing : false,
	singer : {},
	topList : {}, //排行榜
	searchHistory : loadSearch(),
	favoriteList: loadFavorite(),
	playHistory: loadPlay()
}
	
export default state