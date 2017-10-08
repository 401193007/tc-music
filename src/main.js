import "babel-polyfill"
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from "fastclick"
import store from "./store"
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload,{
	loading: require('common/image/default.png')
})

fastclick.attach(document.body)
Vue.config.productionTip = false


import 'common/stylus/reset.styl'
import 'common/stylus/base.styl'
import 'common/stylus/icon.styl'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
