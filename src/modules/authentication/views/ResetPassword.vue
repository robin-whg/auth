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
        class="mb-4"
      ></base-form-input>
      <base-button
        :loading="loading"
        type="submit"
        class="btn-primary w-full mb-2"
        >Reset Password</base-button
      >
      <p class="text-center">
        Back to
        <router-link class="link-primary" :to="{ name: 'SignIn' }">
          Sign In
        </router-link>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      errorEmail: "",
      loading: false,
    };
  },
  methods: {
    async submit() {
      this.loading = true;
      this.errorEmail = "";
      try {
        if (
          !this.email ||
          !this.email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)
        ) {
          this.errorEmail = "Please enter a valid e-mail.";
        }
        if (!this.errorEmail) {
          await this.$store.dispatch("authentication/resetPassword", {
            email: this.email,
          });
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