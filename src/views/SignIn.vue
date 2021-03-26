<template>
  <div>
    <h1>Sign In</h1>
    <form>
        <base-form-input v-model="email" label="E-Mail" type="email" ></base-form-input>
        <base-form-input v-model="password" label="E-Mail" type="email" ></base-form-input>
      <button type="submit">Sign In</button>
      <p>
        Forgot password?
        <router-link :to="{ name: 'ResetPassword' }"> Reset </router-link>
      </p>
      <p>
        No account?
        <router-link :to="{ name: 'SignUp' }"> Sign Up </router-link>
      </p>
    </form>
  </div>
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