<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ cnt }}</h1>
    Parent counter : {{ this.$store.state.counter }}
    <button v-on:click="addCounter()">+</button>
    <button v-on:click="subCounter()">-</button>
    
    <h2>Essential Links</h2>
  </div>
</template>

<script>
import Test from './Test.vue'

export default {
  name: 'HelloWorld',
  components : {
    Test
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      cnt: this.$store.state.count
    }
  },
  methods : {
    addCounter() {
      this.$store.state.count++;
      cnt = this.$store.state.count;
    },
    subCounter(){
      this.$store.state.count--;
      cnt = this.$store.state.count;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
