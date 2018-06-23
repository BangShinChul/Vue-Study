<template>
  <div class="panel panel-default">
  <h1>{{ msg }}</h1>
    <div class="panel-heading">
      Panel heading without title
    </div>
    <div class="panel-body">
      Panel content
    </div>
  </div>
</template>

<script>
export default {
  name: 'popup',
  data () {
    return {
      msg: 'Hello world! My Name is Noah!'
    }
  }
}
</script>

