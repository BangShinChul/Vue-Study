// store.js
import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'


Vue.use(Vuex);
Vue.use(Router);

export const store = new Vuex.Store({
  //
  state: {
  	count : 0
  },
  
  mutations : {
  	increment (state) {
  		state.count++
  	}
  }

});