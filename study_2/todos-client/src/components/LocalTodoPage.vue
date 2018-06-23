<template>
	<div class="container">
		<h2>{{msg}}</h2>
		<h4>{{submsg}}</h4>
		<div class="input-group" style="margin-bottom: 10px;">
			<input type="text" class="form-control" placeholder="할일을 입력해주세요." v-model="name" v-on:keyup.enter="createTodo(name)">
			<span class="input-group-btn">
				<button class="btn btn-default" type="button">추가</button>
			</span>
		</div>
		<ul class="list-group">
			<li class="list-group-item" v-for="(todo, index) in todos">
				{{todo.name}}
				<div class="btn-group pull-right" style="font-size: 12px; line-height: 1;">
					<button type="button" class="btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						더보기
					</button>
					<ul class="dropdown-menu">
						<li><a href="#" @click="deleteTodo(index)">삭제</a></li>
					</ul>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		// 해당 컴포넌트에서 바인딩할 데이터들을 작성한다.
		data(){
			return {
				msg: 'Todo App',
				submsg: 'localStorage를 이용한 Todo App 입니다.',
				todos: []
			}
		},

		// mounted는 Vue 컴포넌트가 페이지에 끼워지고(mounted)나서 호출되는 함수이다.
		mounted(){
			console.log('LocalTodoPage.vue is mounted.');
			this._getFromLocalStorage();
		},

		// 브라우저에 데이터를 저장하는 localStorage 정의 
		localStorage: {
		    todo: {
		    	type: String
		    }
		},

		// 해당 컴포넌트에서 사용할 함수를 작성한다.
		methods: {
			deleteTodo(i) {
				this.todos.splice(i,1);
				this._saveToLocalStorage(this.todos);
			},
			createTodo(name) {
				if(name != null){
					this.todos.push({name : name});
					this.name = null
				}
				this._saveToLocalStorage(this.todos);
			},

			// localStorage에 데이터를 저장할 때 사용하는 함수
			_saveToLocalStorage(data){
		      this.$localStorage.set('todo', JSON.stringify(data));
		    },

		    // localStorage에 저장한 data를 가져올 때 사용하는 함수
		    _getFromLocalStorage(){
		      this.todos = JSON.parse(this.$localStorage.get('todo')) || [];
		    }
		}
	}
</script>