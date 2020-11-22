<template>
<div id="nav">
  <b-navbar toggleable="xl" type="dark" variant="dark" class="navbar navbar-expand-lg">
    <router-link to="/">
        <b-navbar-brand>
          <img src="..\assets\logo.png" alt="Arrangement" id="logo">
        </b-navbar-brand>
    </router-link>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <b-collapse is-nav>
        <b-navbar-nav>
          <b-nav-item>Make an Arrangement</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item>Musicians</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item>Bands</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <!-- Login / Logout -->
        <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="Account" right>
            <!--<b-dropdown-item href="#" disabled>Hello, {{user.data.displayName}}</b-dropdown-item>-->
            <b-dropdown-item :to="{ name: 'register' }">Register</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'login' }">Log In</b-dropdown-item>
            <b-dropdown-item @click="logout()">Log Out</b-dropdown-item>
        </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</div>
</template>

<script>
// import firebase from "firebase";
export default {
  name: "Navbar",
  methods: {
    logout() {
    }
  }
};
</script>

<style>
/* b-collapse {
  padding-right: 25px;
} */

#logo {
  height: 55px;
  width: auto;
}

@media only screen and (max-width: 600px) {
}

</style>