// store.js
import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'

Vue.use(Vuex);
Vue.use(Router);

export const store = new Vuex.Store({
  //data
  state: {
  	count : 0
  },
  
  //methods
  mutations : {
  	increment (state) {
  		state.count++
  	},
  	subment (state) {
  		state.count--
  	}
  }

});