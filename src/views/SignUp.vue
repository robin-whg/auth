<template>
    <form @submit.prevent="submit()">
    <h1>Sign Up</h1>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" />
      </div>
      <button type="submit">Sign Up</button>
      <p>
        Already got an account?
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
    const password = ref('')
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
    return { email, password, loading, error, submit };
  },
};
</script>

<style lang="scss" scoped>
</style>