<template>
  <div id="app">
    <!--boostrap vue navbar-->
    <Navbar />
    <!--body-->
    <router-view/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld
    Navbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  /*padding-top: 50px;
  padding-bottom: 50px;*/
  font-size: larger;
}
#errorList {
  color: red;
  list-style-type: none;
}
input[type="button"] {
  margin: 10px;
}
</style>
