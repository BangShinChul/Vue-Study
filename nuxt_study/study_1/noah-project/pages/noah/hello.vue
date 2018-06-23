<template>
  <div>
    <span v-text="say"></span>
    <hello-noah v-bind:message="childSay"/> <!-- 이 부분은 자식 컴포넌트를 호출하는 부분입니다. -->
  </div>
</template>

<script>
    // 현재 컴포넌트에서 불러와 사용할 자식 컴포넌트를 import해줍니다.
    import HelloNoah from "~/components/HelloNoah";

    // 여기에서 컴포넌트의 이름과 데이터를 정의해줍니다.
    // say라는 변수를 만들어 'hello world!'라는 문자열을 담아 template에서 보여주겠습니다.
    export default {

        // 현재 컴포넌트에서 불러와서 사용할 자식컴포넌트를 정의합니다.
        components: {
            HelloNoah
        },
        name: "hello",
        data: function() {
          return {
            say: 'hello world!',
            childSay: 'hello child!'
          }
        },
        // 직접 컴포넌트에 아래와 같은 설정을 통해 컴포넌트마다 meta를 설정해줄 수 있습니다.
        head () {
            return {
                title: this.title,
                meta: [
                    { hid: `noah's nuxt.js study`, name: 'noah', content: `noah's content` }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
