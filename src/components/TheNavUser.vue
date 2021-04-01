<template>
  <div v-if="user">
    <base-dropdown position="right">
      <template v-slot:button>
        <button class="hover:bg-gray-200 dark:hover:bg-gray-700 text-secondary rounded-full p-2">
          <i class="bi bi-person text-2xl"></i>
        </button>
      </template>
      <template v-slot:items>
        <div class="whitespace-nowrap pb-3 px-4">
          <p>Sign in as</p>
          <p class="font-semibold" v-if="user.displayName">
            {{ user.displayName }}
          </p>
          <p class="font-semibold" v-else>{{ user.email }}</p>
        </div>
        <hr class="border-gray-200 mb-2 dark:border-gray-700">
        <base-dropdown-item>
          <dark-mode-toggle></dark-mode-toggle>
        </base-dropdown-item>
        <base-dropdown-item>
          <router-link
            :to="{ name: 'Settings' }"
            class="w-full px-4 py-1 flex items-center"
            ><i class="bi bi-gear text-secondary text-xl mr-2"></i
            ><span>Settings</span></router-link
          >
        </base-dropdown-item>
        <hr class="border-gray-200 my-2 dark:border-gray-700">
        <base-dropdown-item>
          <button
            @click="signOut()"
            class="text-left w-full px-4 py-1 flex items-center"
          >
            <i class="bi bi-box-arrow-right text-danger text-xl mr-2"></i
            ><span>Sign Out</span>
          </button>
        </base-dropdown-item>
      </template>
    </base-dropdown>
  </div>
  <div v-else>
    <base-button
      @click="$router.push({ name: 'SignIn' })"
      class="hover:bg-gray-100 mr-2"
      >Sign In</base-button
    >
    <base-button
      @click="$router.push({ name: 'SignUp' })"
      class="bg-blue-500 text-gray-50"
      >Sign Up</base-button
    >
  </div>
</template>

<script>
import { auth, state } from "@/firebase.js";
import { useRouter, useRoute } from "vue-router";
import { computed } from "vue";
import DarkModeToggle from "@/components/DarkModeToggle.vue";

export default {
  components: {
    DarkModeToggle,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const user = computed(() => {
      return state.user;
    });
    async function signOut() {
      try {
        await auth.signOut();
        if (route.meta.requiresAuth) {
          router.push({ name: "Home" });
        }
      } catch (error) {
        console.log(error);
      }
    }
    return { user, signOut };
  },
};
</script>

<style lang="scss" scoped>
</style>