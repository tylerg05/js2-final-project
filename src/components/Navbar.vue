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
            <b-dropdown-item disabled v-if="currentUser">Hello, {{ currentUser.email }}!</b-dropdown-item>
            <b-dropdown-item v-if="!currentUser" :to="{ name: 'register' }">Register</b-dropdown-item>
            <b-dropdown-item v-if="!currentUser" :to="{ name: 'login' }">Log In</b-dropdown-item>
            <b-dropdown-item v-if="currentUser" @click.prevent="logout">Log Out</b-dropdown-item>
        </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Navbar",
  data() {
    return {
      currentUser: null,
      userRole: null,
    };
  },
  mounted() {
    // listen for when a user logs in or logs out
    // When a user logs in fetch their data from the users collection
    // If the user is loggin in for the first time, then we need to add a document for them to the users collection
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.currentUser = user;
        // a user has just logged in, so we need to get his/her document
        // from our users collection
        this.getUserDocument(user.uid);
        this.$router.push("/").catch(() => {});
      } else {
        this.currentUser = null;
        this.userRole = null;
      }
    });
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(
          () => {
            this.$router.push("login").catch(() => {});
            // when a user logs out, redirect to the login view
            // note that if you don't put the catch(), then
            // you may get a warning saying you should avoid redundant navigation
            console.log("Logged Out");
          },
          (error) => {
            console.log("error logging out", error);
          }
        );
    },
    getUserDocument(userId) {
      console.log("GETTING USER DOCUMENT...", userId);
      const db = firebase.app().firestore();
      db.collection("users")
        .doc(userId)
        .get()
        .then((doc) => {
          if (doc.exists == false) {
            console.log("THE USER DOCUMENT DOES NOT EXIST...");
            this.createUserDocument();
          } else {
            console.log("User document:", doc.data());
            this.userRole = doc.data().role;
            this.currentUser.role = doc.data().role;
          }
        })
        .catch((error) => console.log(error));
    },
    createUserDocument() {
      const user = firebase.auth().currentUser;
      if (user) {
        // Note, you may want to store more info in the users collection
        // (I am just adding email and role, but your app may call for more fields)
        const db = firebase.app().firestore();
        this.userRole = "user"; // when a new user is created they default to the 'user' role
        db.collection("users")
          .doc(user.uid)
          .set({ email: user.email, role: this.userRole }, { merge: true })
          .then(() => console.log("USER DOCUMENT CREATED"))
          .catch((e) => console.log(e));
      } else {
        console.log("cannot create user doc!");
      }
    },
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