<template>
	<div class="singer" ref="singer">
		<list-view @select="selectSinger" :data="singers" ref="list"></list-view>
		<router-view></router-view>
	</div>
</template>

<script>

	import {getSingerList} from 'api/singer'
	import Singer from 'common/js/singer'
	import {ERR_OK} from 'api/config'
	import {mapMutations} from 'vuex'

	import ListView from 'base/listview/listview'

	const HOT_SINGER_LEN = 10  //热门歌手数量
	const HOT_NAME = '热门'

	export default {
		components : {
			ListView
		},
		data(){
			return {
				singers : []
			}
		},
		created(){
			this._getSingerList()
		},
		mounted(){
			this.$nextTick(()=>{
				// console.log("我获取的组件是；" + this.$refs.singer)
			})
		},
		methods : {
			...mapMutations({
				setSinger: 'SET_SINGER'
			}),
			selectSinger(singer){
				this.$router.push({
					path: `/singer/${singer.id}`
				})
				this.setSinger(singer)			
			},
			_getSingerList() {
				
				getSingerList().then((res) => {
					if (res.code === ERR_OK) {
						this.singers = this._normalizeSinger(res.data.list)
					}
				})
			},
			//序列化歌手列表
			_normalizeSinger(list){
				//歌手总对象：分热门歌手与歌手列表  热门歌手在hot对象里，歌手列表直接在map内
				let map = {
					hot: {
						title: HOT_NAME,
						items: []
					}
				}

				list.forEach(function(item,index){
					if (index < HOT_SINGER_LEN) {
						map.hot.items.push(new Singer({
							name: item.Fsinger_name,
							id: item.Fsinger_mid
						}))
					}	

					const key = item.Findex
					if (!map[key]) {
						map[key] = {
							title: key,
							items: []
						}
					}

					map[key].items.push(new Singer({
						name: item.Fsinger_name,
						id: item.Fsinger_mid
					}))
				})

				// 为了得到有序列表，我们需要处理 map
				let ret = []
				let hot = []
				for (let key in map) {
					let val = map[key]
					if (val.title.match(/[a-zA-Z]/)) {
						ret.push(val)
					} else if (val.title === HOT_NAME) {
						hot.push(val)
					}
				}		
					
				//排序
				ret.sort((a, b) => {
					return a.title.charCodeAt(0) - b.title.charCodeAt(0)
				})	
				return hot.concat(ret)			
			}			
		}
	}
</script>

<style lang="stylus" scoped>
	.singer
		position: fixed
		top: 88px
		bottom: 0
		width: 100%	
</style>