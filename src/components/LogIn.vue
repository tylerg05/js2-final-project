<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Login</div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <b-alert v-model="showDismissibleAlert" variant="success" dismissible>
            Log in success!
            </b-alert>
            <form action="#" @submit.prevent="submit">
            <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                <div class="col-md-6">
                <input
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="form.email"
                />
                </div>
            </div>

            <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                <div class="col-md-6">
                <input
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    required
                    v-model="form.password"
                />
                </div>
            </div>

            <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                <button class="btn btn-primary">Login</button>
                </div>
            </div>
            <br>

            <!-- <div align="center" style="font-size: smaller;">
                Don't have an account? Register <router-link :to="{ name: 'register' }">here</router-link>.
            </div> -->
                  
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import firebaseApp from "../firebase";
// import store from './store'
// import { auth } from './firebase'

export default {
    name: "Login",
    data() {
        return {
            form: {
                email: "",
                password: ""
            },
            error: null,
            showDismissibleAlert: false,
        }
    },
    methods: {
        // login() {
        //     this.$store.dispatch('login', {
        //         email: this.form.email,
        //         password: this.form.password
        //     });
        // }
    }
};
</script>