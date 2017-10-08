import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Recommend from "components/recommend/recommend"
import Disc from "components/disc/disc"
import Singer from "components/singer/singer"
import SingerDetail from "components/singer-detail/singer-detail"
import Rank from "components/rank/rank"
import TopList from "components/top-list/top-list"
import Search from "components/search/search"
import UserCenter from "components/user-center/user-center"

export default new Router({
	routes: [
		{
			path : "/",
			redirect : "/recommend"
		},
		{
			path: '/recommend',
			component: Recommend,
			children: [
				{
					path: '/recommend/:id',
					component: Disc
				}
			]
		},
		{
			path: '/singer',
			component: Singer,
			children: [
				{
					path: ':id',
					component: SingerDetail
				}
			]
		},
		{
			path: '/rank',
			component: Rank,
			children: [
				{
					path: ':id',
					component: TopList
				}
			]
		},
		{
			path : '/search',
			component : Search
		},
		{
			path: '/user',
			component: UserCenter
		}										
	]
})
