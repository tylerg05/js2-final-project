<template>
<div id="nav">
  <b-navbar toggleable="xl" type="dark" variant="info">
    <router-link to="/">
        <b-navbar-brand>Arrangement</b-navbar-brand>
    </router-link>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#" disabled>Arrange</b-nav-item>
        <b-nav-item href="#" disabled>Musicians</b-nav-item>
        <b-nav-item href="#" disabled>Bands</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <!-- Login / Logout -->
      <b-navbar-nav class="ml-auto">
      <b-nav-item-dropdown text="Account" right>
          <!--<b-dropdown-item href="#" disabled>Hello, {{user.data.displayName}}</b-dropdown-item>-->
          <b-dropdown-item :to="{ name: 'register' }">Register</b-dropdown-item>
          <b-dropdown-item :to="{ name: 'login' }">Log In</b-dropdown-item>
          <b-dropdown-item v-if="user.loggedIn" @click.prevent="signOut">Log Out</b-dropdown-item>
      </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<script>
import firebase from "firebase";
export default {
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "home"
          });
        });
    }
  }
};
</script>