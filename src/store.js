import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from '../src/firebase'
import router from '../src/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userProfile: {}
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val;
    }
  },
  actions: {
    async login({ dispatch }, form) {
      // sign user in
      const { user } = auth.signInWithEmailAndPassword(form.email, form.password).then(obj => {
        console.log("LOG IN SUCCESS", obj);
      }).catch(error => console.log(error));

      // fetch user profile and set in state
      dispatch('fetchUserProfile', user);
    },
    async fetchUserProfile({ commit }, user) {
      // fetch user profile
      this.user = auth.currentUser;

      // set user profile in state
      commit('setUserProfile', user.data());
      
      // change route to dashboard
      router.push('/')
    },
    async signup({ dispatch }, form) {
      // sign user up
      const { user } = auth.createUserWithEmailAndPassword(form.email, form.password).then(obj => {
        alert("Account created");
        console.log(obj);
      }, error => {
          console.log(error);
      });
    
      // fetch user profile and set in state
      dispatch('fetchUserProfile', user);
    },
    async logout({ commit }) {
      auth.signOut().then(obj => {
        alert("You have logged out");
        console.log(obj);
      }, error => {
          console.log(error);
      });
    
      // clear userProfile and redirect to /login
      commit('setUserProfile', {})
      router.push('/login')
    }
  }
})