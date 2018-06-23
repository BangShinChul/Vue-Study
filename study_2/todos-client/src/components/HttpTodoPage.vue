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
				msg: 'Http Todo App',
				submsg: '해당 앱은 node.js로 rest api를 만들어본 후 다시 작성해보겠습니다.',
				todos: []
			}
		},

		// mounted는 Vue 컴포넌트가 페이지에 끼워지고(mounted)나서 호출되는 함수이다.
		mounted(){
			console.log('HttpTodoPage.vue is mounted.');
			this.getTodos();
		},
		// 해당 컴포넌트에서 사용할 함수를 작성한다.
		methods: {
			createTodo(name) {
				if(name != null){
					var vm = this;
					this.$http.defaults.headers.post['Content-Type'] = 'application/json';
					this.$http.post('http://todos.garam.xyz/api/todos', {
						name:name
					}).then((result) => {
						vm.todos.push(result.data);
					})
					this.name = null;
				}
			},
			deleteTodo(i) {
				this.todos.splice(i,1);
			},
			//restful api를 사용하여 데이터를 가져오는 메서드
			getTodos(){
				var vm = this;
				this.$http.get('http://todos.garam.xyz/api/todos')
				.then((result) => {
					vm.todos = result.data.data;
				});
			}
		}
	}
</script>