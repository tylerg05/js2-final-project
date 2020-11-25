<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Login</div>
          <div class="card-body">
            <h4 style="color: red">{{ loginErrorMessage }}</h4>
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
                    v-model="email"
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
                    v-model="password"
                />
                </div>
            </div>

            <div class="form-group row mb-0">
                <br>
                <div class="col-md-8 offset-md-4">
                <button class="btn btn-primary"  @click="login">Login</button>
                </div>
                <br>
            </div>            
            <br>
            <div align="center" style="font-size: smaller;">
                Don't have an account? Register <router-link :to="{ name: 'register' }">Here</router-link> or <a href="#" @click="googleLogin">Sign in with Google</a>.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
    name: "Login",
    metaInfo() {
      return {
          title: "Log In to Arrangement",
          meta: [
              { name: 'description', content:  'Log in to Arrangement.'},
              { property: 'og:title', content: "Log in to Arrangement"},
              { property: 'og:site_name', content: 'Arrangement'}
          ]
      }
    },
    data() {
        return {
            email: "",
            password: "",
            loginErrorMessage: "",
            error: false,
            showDismissibleAlert: false,
        }
    },
    methods: {
      // login method from firebase-users demo
      login() {
      this.loginErrorMessage = "";
      if (this.email && this.password) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then((userCredential) => {
            console.log(
              "SIGNED IN WITH EMAIL AND PASSWORD",
              userCredential.user
            );
            // if you don't use a param then it won't compile!!!!
          })
          .catch((error) => {
            this.error = true;
            this.loginErrorMessage = error.message;
          });
      } else {
        // CRUDE VALIDATION CODE!
        if (!this.email && !this.password) {
          this.loginErrorMessage = "You must enter an email and password";
        } else if (!this.email) {
          this.loginErrorMessage = "You must enter an email";
        } else if (!this.password) {
          this.loginErrorMessage = "You must enter a password";
        }
      }
    },
    googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((userCredential) => {
          console.log("LOGGED IN W GMAIL:", userCredential.user);
        })
        .catch((error) => console.log(error));
    },
    }
};
</script>