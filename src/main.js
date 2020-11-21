import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from "./store";
import firebaseApp from './firebase';

Vue.config.productionTip = false

firebaseApp.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

