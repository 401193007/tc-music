<template>
	<div class="recommend" ref="recommend" >
		<scroll ref="scroll" class="recommend-content" :data="discList">
			<!--注意 div容器 -->
			<div>
				<div v-if="recommends.length" class="slider-wrapper" ref="sliderWrapper">
					<slider>
						<div v-for="item in recommends">
							<a :href="item.linkUrl">
								<img class="needsclick" :src="item.picUrl">
							</a>
						</div>
					</slider>
				</div>		
				<div class="recommend-list">
					<h1 class="list-title">热门歌单推荐</h1>
					<ul>
						<li @click="selectItem(item)" v-for="item in discList" class="item">
							<div class="icon">
								<img width="60" height="60" v-lazy="item.imgurl">
							</div>
							<div class="text">
								<h2 class="name" v-html="item.creator.name"></h2>
								<p class="desc" v-html="item.dissname"></p>
							</div>
						</li>
					</ul>
				</div>	
			</div>
		</scroll>
		<router-view></router-view>
	</div>
</template>

<script>
	import Scroll from "base/scroll/scroll"
	import Slider from 'base/slider/slider'

	import {getRecommend , getDiscList} from 'api/recommend'
	import {ERR_OK} from 'api/config'

	import {mapMutations} from 'vuex'

	export default {
		components : {
			Scroll,
			Slider
		},
		data(){
			return {
				recommends : [],
				discList : []
			}
		},
		//创建组件生命周期 --- 请求数据
		created(){
			let that = this

			that._getRecommend()
			that._getDiscList()
		},
		methods : {
			//私有方法 --- 用_表示
			_getRecommend (){
				//请求数据
				getRecommend()
					.then((res)=>{
						if(res.code == ERR_OK){
							this.recommends = res.data.slider
						}
					})
			},
			_getDiscList (){
				getDiscList().then((res) => {
					if (res.code === ERR_OK) {
						this.discList = res.data.list
					}
				})
			},
			selectItem (disc){
				//跳转写法
				this.$router.push({
					path: `/recommend/${disc.dissid}`
				})
				//保存进vuex state
				this.setDisc(disc)
			},
			...mapMutations({
				setDisc: 'SET_DISC'
			})
		},
	}
</script>

<style scoped lang="stylus">
	@import "~common/stylus/variable"
	
	.recommend
		position: fixed
		width: 100%
		top: 88px
		bottom: 0	
		.recommend-content
			height: 100%
			overflow: hidden	
			.slider-wrapper
				position: relative
				width: 100%
				overflow: hidden		
			.recommend-list
				.list-title
					height: 65px
					line-height: 65px
					text-align: center
					font-size: $font-size-medium
					color: $color-theme	
				.item
					display: flex
					box-sizing: border-box
					align-items: center
					padding: 0 20px 20px 20px
					.icon
						flex: 0 0 60px
						width: 60px
						padding-right: 20px
					.text
						display: flex
						flex-direction: column
						justify-content: center
						flex: 1
						line-height: 20px
						overflow: hidden
						font-size: $font-size-medium	
						.name
							margin-bottom: 10px
							color: $color-text
						.desc
							color: $color-text-d																				
</style>