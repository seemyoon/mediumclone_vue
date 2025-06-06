<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>
          <p class="text-xs-center">
            <router-link :to="{ name: 'login' }">
              Need an account?
            </router-link>
          </p>
          <mcv-validation-errors v-if="validationErrors" :validation-errors="validationErrors"/>
          <!-- if validationErrors: null we can't see errors     -->
          <form @submit.prevent="onSubmit">
            <fieldset class="form-group">
              <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Username"
                  v-model="username"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  v-model="email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  v-model="password"
              />
            </fieldset>
            <button
                class="btn btn-lg btn-primary pull-xs-right"
                :disabled="isSubmitting"
            >
              <!-- isSubmitting - because is local variable -->
              Sign Up
            </button>
          </form>
          {{ isSubmitting }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import McvValidationErrors from '@/components/ValidationErrors.vue'

export default {
  // dispatch — calls action=> action can change asynchronous logic (for example, fetch) => Then action calls mutation via commit => mutation changes state
  name: "McvRegister",
  components: {McvValidationErrors},
  computed: {
    validationErrors() {
      return this.$store.state.auth.validationErrors
    },
    // It's like a variable that automatically updates when the data it depends on changes.
    isSubmitting() {
      return this.$store.state.auth.isSubmitting;
      // Actions - mi dispatch-imo
      // Mutations - mi commit-imo
    },
  },
  data() {
    return {
      email: "",
      password: "",
      username: "",
    };
  },
  methods: {
    onSubmit() {
      console.log("submitted form");
      this.$store
          .dispatch("register", {
            email: this.email,
            username: this.username,
            password: this.password,
          })
          .then((user) => {
            console.log("successfully register user", user);
            this.$router.push({name: "home"}); // use alias as 'home'
          });
    },
  },
};
</script>
