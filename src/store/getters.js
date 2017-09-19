export const disc = state => state.disc

export const playlist = state => state.playlist

export const sequenceList = state => state.sequenceList

export const mode = state => state.mode  //播放模式

//当前播放歌曲
export const currentSong = (state) => {
	return state.playlist[state.currentIndex] || {}
}

//最喜欢的歌曲
export const favoriteList = state => state.favoriteList

export const playing = state => state.playing

export const fullScreen = state => state.fullScreen