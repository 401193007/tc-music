<template>
	<transition name="slide">
		<music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
	</transition>	
</template>

<script>
	import MusicList from "components/music-list/music-list"
	import {getSongList} from 'api/recommend'
	import {ERR_OK} from 'api/config'

	import {mapGetters} from 'vuex'
	import {createSong} from 'common/js/song'

	export default {
		components : {
			MusicList
		},
		data(){
			return {
				songs: []
			}
		},
		computed : {
			title (){
				return this.disc.dissname
			},
			bgImage (){
				return this.disc.imgurl
			},
			...mapGetters([
				'disc'
			])			
		},
		created(){

			this._getSongList()	

		},
		methods : {
			_getSongList (){

				//检查是否存在
				if (!this.disc.dissid){
					this.$router.push('/recommend')
					return					
				}
				getSongList(this.disc.dissid).then((res)=>{
					if (res.code === ERR_OK) {
						this.songs = this._normalizeSongs(res.cdlist[0].songlist)  //拿到歌曲列表
					}					
				})
			},
			//重新初始化歌曲对象，筛选掉不重要的字段,把对象中的数组（数据）解析
			_normalizeSongs (list){
				let ret = []
				list.forEach((musicData) => {
					if (musicData.songid && musicData.albummid) {
						ret.push(createSong(musicData))   //注意这里
					}
				})		

				return ret		
			}
		}
	}
</script>

<style scoped lang="stylus">
	.slide-enter-active, .slide-leave-active
		transition: all 0.3s
	.slide-enter, .slide-leave-to
		transform: translate3d(100%, 0, 0)	
</style>