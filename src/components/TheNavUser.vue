<template>
  <div v-if="user">
    <base-button @click="signOut" class="bg-red-200 text-red-600">Sign Out</base-button>
  </div>
  <div v-else>
    <base-button @click="$router.push({name: 'SignIn'})" class="hover:bg-gray-100 mr-2">Sign In</base-button>
    <base-button @click="$router.push({name: 'SignUp'})" class="bg-blue-600 text-gray-50">Sign Up</base-button>
  </div>
</template>

<script>
import { auth, state } from '@/firebase.js'
import { computed } from 'vue'

export default {
    setup() {
        const user = computed(() => { return state.user })
        async function signOut() {
            try {
                await auth.signOut()
            } catch (error) {
                console.log(error)
            }
        }
        return { user, signOut }
    }
}
</script>

<style lang="scss" scoped>
</style>