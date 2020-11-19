<template>
  <div class="login">
    <label>Email</label>
    <br>
    <input type="text" id="txtEmail">
    <br>
    <label>Password</label>
    <br>
    <input type="password" id="txtPassword">
    <br>
    <!--<router-link :to="{ name: 'home'}">-->
    <input @click="logIn" type="button" value="Log In" id="btnLogin">
    <!--</router-link>-->
    <input @click="logOut" type="button" id="btnLogout" value="Log Out">
    <br>
    <input @click="checkForLogin" type="button" value="Login Check" id="btnLoginCheck">
  </div>
</template>

<script>
//import firebase from "firebase";
import { firebaseApp } from "../firebase.js";

export default {
  name: 'LogIn',
  props: {
    email: String,
    password: String
  },
  methods: {
    // Log In Code
    logIn() {
        var email = document.querySelector("#txtEmail").value;
        var password = document.querySelector("#txtPassword").value;

        firebaseApp.auth().signInWithEmailAndPassword(email, password).then(() => {
          alert("LOG IN SUCCESS");
        }).catch(error => console.log(error));
    },
    // Log Out Code
    logOut() {
        firebaseApp.auth().signOut().then(() => {
          alert("You have logged out");
        }, error => {
          console.log(error)
        });
    },
    checkForLogin() {
      var user = firebaseApp.auth().currentUser;
      if (user) {
          alert("You are currently logged in as " + user.email + ".");
      }
      else {
          alert("You are currently not logged in.")
      }
    }
  }
}
</script>