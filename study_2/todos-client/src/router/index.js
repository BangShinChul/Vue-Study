import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Example from '@/components/Example'
import HttpTodoPage from '@/components/HttpTodoPage' //HttpTodoPage component 추가
import LocalTodoPage from '@/components/LocalTodoPage' //LocalTodoPage component 추가

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, 
    {
    	path: '/example',
    	name: 'example',
    	component: Example
    },
    {
    	path: '/http-todos',
    	name: 'HttpTodoPage',
    	component: HttpTodoPage
    },
    {
    	path: '/local-todos',
    	name: 'LocalTodoPage',
    	component: LocalTodoPage
    }
  ]
})
