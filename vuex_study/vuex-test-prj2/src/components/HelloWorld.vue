<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div id="test-section-1">
      <p class="test-txt">{{ txt_1 }}</p>
    </div>
    <div id="test-section-2">
      <p class="test-txt">{{ txt_2 }}</p>
    </div>
    <div id="test-section-3">
      <p class="test-txt">{{ txt_3 }}</p>
    </div>
  </div>
</template>

<script>
// import {store} from '../main.js'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      txt_1: this.$store.state.oneTop,
      txt_2: this.$store.state.twoTop,
      txt_3: this.$store.state.threeTop,
    }
  },
  mounted : function () {
    this.$store.state.oneTop = document.getElementById('test-section-1').offsetTop;
    this.$store.state.twoTop = document.getElementById('test-section-2').offsetTop;
    this.$store.state.threeTop = document.getElementById('test-section-3').offsetTop;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  height: auto;
}
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}

#test-section-1 {
  border: 1px solid red;
  background-color: red;
  width: 100%;
  height: 800px;
}
#test-section-2 {
  border: 1px solid green;
  background-color: green; 
  width: 100%;
  height: 900px;
}
#test-section-3 {
  border: 1px solid blue;
  background-color: blue;
  width: 100%;
  height: 1200px;
}
.test-txt { 
  font-size: 32px;
  font-weight: 400;
  color: #fff;
}
</style>
