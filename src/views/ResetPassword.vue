<template>
  <form @submit.prevent="submit()">
    <h1>Reset Password</h1>
    <div>
      <label for="email">Email</label>
      <input type="email" id="email" />
    </div>
    <button type="submit">Reset Password</button>
    <p>
      Back to
      <router-link :to="{ name: 'SignIn' }"> Sign In </router-link>
    </p>
  </form>
</template>

<script>
import { ref } from 'vue'
//import { auth } from "@/firebase.js";
export default {
  setup() {
    const email = ref('')
    const loading = ref(false)
    const error = ref('')
    function submit() {
        try {
            //clear error
           //check input 
           //api call
           //reroute
        } catch (error) {
           //handle error 
        }
    }
    return { email, loading, error, submit };
  },
};
</script>

<style lang="scss" scoped>
</style>