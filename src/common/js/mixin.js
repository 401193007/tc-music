import {mapGetters, mapMutations, mapActions} from 'vuex'  //flux状态管理
import {playMode} from 'common/js/config'   //播放模式配置文件
import {shuffle} from 'common/js/util'      //随机播放函数

//全局公用播放列表
export const playlistMixin = {
	computed : {
		...mapGetters([
			'playlist'
		])
	},
	mounted(){

		this.handlePlaylist(this.playlist);
	},
	activated(){
		this.handlePlaylist(this.playlist)
	},
	watch : {
		playlist(newVal){
			this.handlePlaylist(newVal)
		}
	},
	methods : {
		handlePlaylist(){
			throw new Error('component must implement handlePlaylist method')
		}
	}
};


//全局公用播放
export const playerMixin = {
	computed : {
		//根据当前播放模式切换icon
		iconMode(){
			return this.mode == playMode.sequence ? 'icon-sequence' : this.mode === playMode.loop ? 'icon-loop' : 'icon-random'
		},
	    ...mapGetters([
			'sequenceList',
			'playlist',
			'currentSong',
			'mode',
			'favoriteList'
	    ]),
	},
    mounted(){
    	
    },
	methods : {
		//改变播放模式
		changeMode() {
			const mode = (this.mode + 1) % 3
			this.setPlayMode(mode)
			let list = null
			if (mode === playMode.random) {
				list = shuffle(this.sequenceList)
			} else {
				list = this.sequenceList
			}
			this.resetCurrentIndex(list)
			this.setPlaylist(list)
		},	
		...mapMutations({
			setPlayMode: 'SET_PLAY_MODE',
			setPlaylist: 'SET_PLAYLIST',
			setCurrentIndex: 'SET_CURRENT_INDEX',
			setPlayingState: 'SET_PLAYING_STATE'
		}),
		...mapActions([
			// 'saveFavoriteList',
			'deleteFavoriteList'
		])

			
	}    	
};




