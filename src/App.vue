<template>
  <div>
    <navbar></navbar>
    <main class="py-4">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import navbar from "./components/Navbar";
export default {
  components: {
    navbar
  }
};
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
input[type="button"] {
  margin: 10px;
}
b-navbar-nav {
  margin-left: 35px;
  margin-right: 35px;
}
</style>
