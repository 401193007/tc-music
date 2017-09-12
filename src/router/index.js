import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Recommend from "components/recommend/recommend"
import Disc from "components/disc/disc"

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
		}			
	]
})
