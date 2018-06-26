# Vuex란?
> 컴포넌트간의 통신이나 데이터 전달을 좀 더 수월하게 하기 위해 사용하는 라이브러리. 컴포넌트간 데이터 전달 및 이벤트 통신 등의 컴포넌트들의 관계를 한곳에서 관리하기 쉽게 구조화 해놓은 것을 상태관리(State Management)라고 한다.

---

<상태관리를 사용하는 이유>
 * 하위 컴포넌트에 거쳐야 할 컴포넌트들이 많아질 때 사용
 * 상하위 관계가 아닌 컴포넌트들끼리 데이터 통신을 해야할 때 사용

이러한 문제점들을 해결하기 위해 모든 데이터 통신을 한곳에서 중앙 집중식으로 관리하는 라이브러리가 Vuex이다.<br>
<br>
상태관리 구성요소는 크게 3가지가 있다.
 * state : 컴포넌트간 공유될 data
 * view : 데이터가 표현될 template
 * actions : 사용자의 입력에 따라 반응할 methods

ex)
<br>
<code>
new Vue({
	
	// state
	data () {
		return {
			count: 0
		}
	},
	
	// view
	template: `<div>{{ count }}</div>`,

	// actions
	methods: {
		increment () {
			this.count++
		}
	}

})
</code>

---

실제로 Vuex를 사용해봅시다. <br>

1. <code>npm install -g vue-cli</code>
2. <code>vue init vuex-test-prj/webpack vuex-test-prj</code>
3. <code>cd vuex-test-prj</code>
4. <code>npm install vuex --save</code>
5. <code>npm install</code>
6. vuex-test-prj/src/store directory 생성 및 store 디렉터리 하위에 store.js 생성
7. <code>npm run dev</code>

<br>
자 이제 코드를 보고 테스트해보며 설명하겠습니다.