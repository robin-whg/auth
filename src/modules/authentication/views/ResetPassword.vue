<template>
  <div class="max-w-md h-screen flex flex-col mx-auto justify-center p-4">
    <router-link to="/" class="mx-auto">
      <img src="@/assets/logo.svg" alt="Logo" class="h-16 w-auto mb-4" />
    </router-link>
    <h1 class="text-center font-semibold text-4xl pb-4">Reset Password</h1>
    <form @submit.prevent="submit()" novalidate>
      <base-form-input
        :error="errorEmail"
        v-model.trim="email"
        label="E-Mail"
        type="email"
      ></base-form-input>
      <base-button
        :loading="loading"
        type="submit"
        color="blue-600"
        class="btn-bg-primary w-full mb-2"
        >Reset Password</base-button
      >
      <p class="text-red-600">
        {{ error }}
      </p>
      <p class="text-center">
        Back to
        <router-link class="text-blue-500" :to="{ name: 'SignIn' }">
          Sign In
        </router-link>
      </p>
    </form>
  </div>
</template>

<script>
import { auth } from "../authentication.service";
export default {
  data() {
    return {
      email: "",
      errorEmail: "",
      loading: false,
      error: "",
    };
  },
  methods: {
    async submit() {
      this.loading = true;
      this.errorEmail = "";
      this.error = "";
      try {
        if (
          !this.email||
          !this.email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)
        ) {
          this.errorEmail = "Please enter a valid e-mail.";
        }
        if (!this.errorEmail) {
          await auth.sendPasswordResetEmail(this.email);
          this.email= "";
          const alert = {
            type: "success",
            message: "Email sent.",
          };
          this.$store.dispatch("alert/add", alert);
        }
      } catch (err) {
        console.log(err);
        this.error = err.message;
      }
      this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>