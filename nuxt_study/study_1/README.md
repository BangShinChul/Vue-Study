# nuxt.js에 대해서 소개합니다.
> 참고 : https://ko.nuxtjs.org/guide
---
Nuxt.js는 Vue.js 애플리케이션을 만들기 위한 프레임워크로, 
주요 범위는 클라이언트/서버 배포를 추상화하면서 UI 렌더링을 하는 것입니다.<br>
<br>
Nuxt.js 안에는 아래와 같은 기능들을 포함합니다.
1. Vue 2
2. Vue-Router
    - Vue-Router란? - 서버에서의 라우팅은 uri에 따라 해당하는 정적파일을 내려주는 방식으로 동작합니다. 
    프론트에서의 라우팅은 uri에 따라 브라우져에서 DOM을 변경하는 방식으로 동작합니다. 이를 SPA라고 합니다. Vue-Router는 이러한 SPA를 담당하는 부분입니다.
3. Vuex (store 옵션을 사용할 때만 포함됩니다.)
    - Vuex란? - 간단하게 설명하면 컴포넌트간 통신을 원활하게 도와주는 라이브러리. 상태관리라는 개념을 통해 컴포넌트간 통신을 쉽게 구조화하여 정리해줍니다.
4. Vue-Meta
    - Vue-Meta란? - Vue 2 구성요소의 페이지 메타 정보를 관리합니다.

---
Nuxt.js는 vue-loader와 babel-loader와 함께 Webpack을 사용해서 코드를 묶고, 분할하며, 압축하는 기능을 가지고 있습니다.
<br>
<br>
Nuxt.js의 특징은 아래와 같습니다.
1. Vue 파일 작성
2. 코드 분할 자동화
3. 서버 사이드 렌더링
4. 비동기 데이터 기반의 강력한 라우팅 시스템
5. 정적 파일 전송
6. ES6/ES7 지원
7. JS & CSS 코드 번들링 및 압축
8. HTML head 태그 관리
9. 개발 단계에서 핫 리로딩 사용하기
10. 전 처리기 지원 : Sass, Less, Stylus 등
---
정리 : Nuxt.js는 Vue.js 애플리케이션에서 서버사이드 렌더링을 위해 사용하는 프레임워크.
프론트사이드에서 서버사이드 렌더링을 하는 이유는 
RSS(Really Simple Syndication), 
SEO(Search Engine Optimization)와 같은 기능을 
프론트엔드 프레임워크에서 사용하기 위해서 입니다.
그럼 간단하게 Nuxt.js를 사용해서 Vue-Meta를 세팅해보고 Hello World를 출력하는 예제를 작성해보겠습니다.
---
1. 먼저 vue를 설치해줍니다.
    - <code>npm install vue</code>

2. 그다음 vue-cli를 설치해줍니다.
    - <code>npm install vue-cli</code>

3. 이제 vue.js의 기본적인 뼈대를 구성했으니 서버라우팅을 위해 vue-cli를 통해 nuxt.js가 포함된 프로젝트를 생성해줍니다.
    - <code>vue init nuxt/starter project-name</code>

4. 그러면 지정한 project-name명으로 디렉터리가 생성되고, 그 안에 Nuxt.js가 포함된 Vue.js skeleton 코드가 생성됩니다. 
자 이제 이 프로젝트를 실제로 돌려볼까요? 아래의 코드를 터미널에서 실행하면 프로젝트가 실행되면서 .nuxt라는 디렉터리가 생성됩니다.
    - <code>npm run dev</code>
    
5. Nuxt.js는 pages 디렉터리의 경로 구성으로 라우팅됩니다. 예를들어, 도메인을 www.noah08liter.com이라 가정하고 
/pages/noah/hello.vue 경로의 vue파일이 있다고 했을 때, hello.vue를 보여주고 싶을 때 이 vue파일은 www.noah08liter.com/noah/hello 로 라우팅됩니다.
 이 예제는 코드상으로 설명드리겠습니다.