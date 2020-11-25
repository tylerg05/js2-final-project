<template>
  <div class="hello">
    Hello! <br>
  </div>
</template>

<script>
//import firebase from "../firebase.js";

export default {
  name: 'HelloWorld',
  metaInfo() {
      return {
          title: "Arrangement: A Band Booking Service",
          meta: [
              { name: 'description', content:  'Welcome to the home page of Arrangement, a band booking service.'},
              { property: 'og:title', content: "Arrangement - Home"},
              { property: 'og:site_name', content: 'Arrangement'}
          ]
      }
  },
  data() {
    return {
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: true
    }
  },
  props: {
    //msg: String
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
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
} */
</style>
