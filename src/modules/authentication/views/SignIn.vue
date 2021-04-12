<template>
  <div class="max-w-md h-screen flex flex-col mx-auto justify-center p-4">
    <router-link to="/" class="mx-auto">
      <img src="@/assets/logo.svg" alt="Logo" class="h-16 w-auto mb-4" />
    </router-link>
    <h1 class="text-center font-semibold text-4xl pb-4">Sign In</h1>
    <form @submit.prevent="submit()" novalidate>
      <base-form-input
        :error="errorEmail"
        v-model.trim="email"
        label="E-Mail"
        type="email"
        class="mb-4"
      ></base-form-input>
      <base-form-input
        :error="errorPassword"
        v-model.trim="password"
        label="Password"
        type="password"
        class="mb-4"
      >
        <router-link class="link-primary" :to="{ name: 'ResetPassword' }">
          Forgot Password?
        </router-link>
      </base-form-input>
      <base-button
        type="submit"
        color="blue-600"
        :loading="loading"
        class="btn-primary w-full mb-2"
        >Sign In</base-button
      >
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      email: "",
      errorEmail: "",
      password: "",
      errorPassword: "",
    };
  },
  methods: {
    async submit() {
      this.loading = true;
      this.errorEmail = "";
      this.errorPassword = "";
      if (
        !this.email ||
        !this.email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)
      ) {
        this.errorEmail = "Please enter a valid email.";
      }
      if (!this.password) {
        this.errorPassword = "Please enter a valid password.";
      }
      if (!this.errorEmail && !this.errorPassword) {
        const res = await this.$store.dispatch("authentication/signIn", {
          email: this.email,
          password: this.password,
        });
        if (res) this.$router.replace({ name: "Home" });
      }
      this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>