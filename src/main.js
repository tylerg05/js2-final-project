import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import storeLoginInfo from "./storeLoginInfo";
import firebaseApp from './firebase';

Vue.config.productionTip = false

firebaseApp.auth().onAuthStateChanged(user => {
  storeLoginInfo.dispatch("fetchUser", user);
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

