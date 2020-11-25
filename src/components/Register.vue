<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Register</div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{error}}</div>

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
                <div class="col-md-8 offset-md-4">
                  <button @click="emailSignUp" class="btn btn-primary">Register</button>
                </div>
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
  metaInfo() {
  return {
      title: "Register for Arrangement",
      meta: [
          { name: 'description', content:  'Register for an Arrangement account.'},
          { property: 'og:title', content: "Register for Arrangement"},
          { property: 'og:site_name', content: 'Arrangement'}
      ]
    }
  },
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    emailSignUp() {
      console.log(this.email, this.password);
      if (this.email && this.password) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((params) => {
            console.log("SUCCESS", params);
          })
          .catch((error) => {
            console.log("SIGN UP ERROR:", error.message);
            // The account could aleady exist,
            // or the password may not be strong enough
          });
      } else {
        console.log("Inavalid user input - Make sure you add validation code!");
      }
    },
  }
};
</script>