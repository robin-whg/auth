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
      ></base-form-input>
      <base-form-input
        :error="errorPassword"
        v-model.trim="password"
        label="Password"
        type="password"
      >
        <router-link
          class="text-blue-500"
          :to="{ name: 'ResetPassword' }"
        >
          Forgot Password?
        </router-link>
      </base-form-input>
      <base-button
        type="submit"
        color="blue-600"
        :loading="loading"
        class="btn-bg-primary w-full mb-2"
        >Sign In</base-button
      >
      <p class="text-red-500">
        {{ error }}
      </p>
      <p class="text-center">
        No account?
        <router-link
          class="text-blue-500"
          :to="{ name: 'SignUp' }"
        >
          Sign Up
        </router-link>
      </p>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { auth } from "@/firebase.js";
export default {
  setup() {
    const router = useRouter();
    const email = ref("");
    const password = ref("");
    const loading = ref(false);
    const error = ref("");
    const errorEmail = ref("");
    const errorPassword = ref("");
    async function submit() {
      loading.value = true;
      errorEmail.value = "";
      errorPassword.value = "";
      error.value = "";
      try {
        if (
          !email.value ||
          !email.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)
        ) {
          errorEmail.value = "Please enter a valid e-mail.";
        }
        if (!password.value) {
          errorPassword.value = "Please a valid password.";
        }
        if (!errorEmail.value && !errorPassword.value) {
          await auth.signInWithEmailAndPassword(email.value, password.value);
          router.replace({ name: "Home" });
        }
      } catch (err) {
        console.log(err);
        error.value = err.message;
      }
      loading.value = false;
    }
    return {
      email,
      password,
      loading,
      error,
      errorEmail,
      errorPassword,
      submit,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>