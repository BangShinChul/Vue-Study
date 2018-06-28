// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.productionTip = false
Vue.config.devtools = true

/* eslint-disable no-new */
const store = new Vuex.Store({
  state:{
    oneTop: 0,
    twoTop: 0,
    threeTop: 0
  }
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
