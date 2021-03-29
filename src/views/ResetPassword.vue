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
        class="bg-blue-600 hover:bg-blue-700 text-gray-50 w-full mb-2"
        >Reset Password</base-button
      >
      <p class="text-red-600">
        {{ error }}
      </p>
      <p class="text-center">
        Back to
        <router-link
          class="text-blue-600 hover:text-blue-700"
          :to="{ name: 'SignIn' }"
        >
          Sign In
        </router-link>
      </p>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { auth } from "@/firebase.js";
export default {
  setup() {
    const email = ref("");
    const loading = ref(false);
    const error = ref("");
    const errorEmail = ref("");
    async function submit() {
      loading.value = true;
      errorEmail.value = "";
      error.value = "";
      try {
        if (
          !email.value ||
          !email.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)
        ) {
          errorEmail.value = "Please enter a valid e-mail.";
        }
        if (!errorEmail.value) {
          await auth.sendPasswordResetEmail(email.value);
          email.value = "";
          alert("email sent");
        }
      } catch (err) {
        console.log(err);
        error.value = err.message;
      }
      loading.value = false;
    }
    return {
      email,
      submit,
      loading,
      error,
      errorEmail,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>