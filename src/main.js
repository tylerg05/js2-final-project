import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from "./store";
//import firebaseApp from './firebase';
import * as firebase from "firebase";

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyBFS-XJmuGAOxpY09rmE-qvVZJ4OoIWpXk",
  authDomain: "final-project-71640.firebaseapp.com",
  databaseURL: "https://final-project-71640.firebaseio.com",
  projectId: "final-project-71640",
  storageBucket: "final-project-71640.appspot.com",
  messagingSenderId: "236576841509",
  appId: "1:236576841509:web:3cfa4d2e7ac51c305fc4cc",
  measurementId: "G-C5ZNKWH33W"
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

