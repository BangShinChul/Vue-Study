# Spring boot gradle(Back-end) + Vue.js(Front-end) 조합으로 간단한 TODO앱 만들기 실습입니다.
---
1. Back-end 는 RESTful하게 구성합니다.
2. Front-end 는 SPA 형식으로 구성합니다.
---
* 백엔드는 웹서버에서 돌아가는 파트입니다.
* 프론트엔드는 브라우저 상에서 돌아가는 파트입니다.
* 우리가 공부해볼 프로젝트의 모습은 백엔드에서 요청에 대한 응답을 JSON형태의 데이터로 넘겨줍니다.(처음 빌드될 때를 제외하고는 View를 제어해주지 않습니다. 처음 View를 제어해주는 이유는 어쨋든 첫 화면을 띄워줘야 그 안에서 Vue가 동작할 수 있기 때문입니다.)
* 즉, 백엔드가 처음을 제외하고는 View를 제어해주지 않습니다. RESTful 하게 데이터만 전달해줍니다.
* 프론트엔드는 백엔드에서 전달받은 데이터를 통해 View(DOM)를 제어합니다.
* 데이터베이스는 MariaDB를 사용합니다.
	- TODO앱을 위한 간단한 테이블 구조는 다음과 같습니다.
	- id : TODO의 primary한 id입니다.
	- content : TODO의 내용입니다.
	- created_on : TODO 생성날짜 입니다.
	- due_date : TODO 마감날짜 입니다.
	- used : TODO 완료 여부 입니다.
<br>
+------------+--------------+------+-----+---------+----------------+<br>
| Field      | Type         | Null | Key | Default | Extra          |<br>
+------------+--------------+------+-----+---------+----------------+<br>
| id         | int(10)      | NO   | PRI | NULL    | auto_increment |<br>
| content    | varchar(200) | YES  |     | NULL    |                |<br>
| created_on | date         | YES  |     | NULL    |                |<br>
| due_date   | date         | YES  |     | NULL    |                |<br>
| used       | int(1)       | NO   |     | 1       |                |<br>
+------------+--------------+------+-----+---------+----------------+<br>
<br>
* 우리는 이 프로젝트를 통해 백엔드, 프론트엔드가 각각 하는 일을 경험해볼 수 있고 웹 애플리케이션의 최신 트렌드를 공부할 수 있습니다.
---
>학습 순서는 다음과 같습니다.
1. Spring boot gradle 프로젝트를 생성하여 jsp 페이지를 브라우저로 불러와 봅니다.
2. 프로젝트 파일들을 수정하여 Spring boot gradle 프로젝트에서 npm을 빌드할 수 있도록 세팅합니다.
3. Spring boot 프로젝트에서 npm 빌드를 통해 Jsp페이지 대신 Vue 페이지를 브라우저로 불러와 봅니다.
4. Vue axios 모듈을 통해 REST api에게 요청하고 응답을 받아 view를 변경해봅니다.
5. 끝. 이제 마음대로 toy project를 수정하며 공부해봅시다.
---
>우리가 알아야 할 것 
1. Spring boot는 어떻게 빌드되는가
2. Spring boot 안에서 npm 은 어떻게 빌드되는가
3. 그렇다면 Spring boot가 빌드될 때 npm을 함께 빌드시키려면 어떻게 해야하는가
---

