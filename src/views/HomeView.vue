<template>
  <div class="home">
    <img @click="fn()" alt="Vue logo" src="../assets/logo.png">
    <h1>1111</h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  created(){
    this.fn()
  }
}
</script>
