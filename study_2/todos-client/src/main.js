// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios' //axios를 사용할 수 있도록 import
import VueLocalStorage from 'vue-localstorage' //vue에서 localStorage를 사용할 수 있도록 import

/* axios는 http프로토콜, rest api와 연동 등의 기능을 사용할 때 
많이 쓰는 ajax 사용을 편하게 만들어주는 라이브러리이다. */

Vue.config.productionTip = false
Vue.prototype.$http = axios //axios를 전역적으로 사용할 수 있도록 정의
Vue.use(VueLocalStorage) //Vue에서 LocalStorage를 사용할 수 있도록 정의


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
