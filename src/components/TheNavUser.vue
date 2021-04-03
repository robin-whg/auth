<template>
  <template v-if="user">
    <base-dropdown position="right">

      <template #button>
        <base-button size="sm" class="btn-text-secondary rounded-full">
          <i class="bi bi-person text-2xl" />
        </base-button>
      </template>

      <template #items>
        <div class="whitespace-nowrap pb-3 px-4">
          <p>Signed in as</p>
          <p class="font-semibold" v-if="user.displayName">
            {{ user.displayName }}
          </p>
          <p class="font-semibold" v-else>
            {{ user.email }}
          </p>
        </div>
        <hr class="border-gray-200 mb-2 dark:border-gray-700" />
        <base-dropdown-item>
          <dark-mode-toggle />
        </base-dropdown-item>
        <base-dropdown-item @click="$router.push({ name: 'Settings' })">
          <i class="bi bi-gear text-secondary text-xl mr-2" />
          <span>Settings</span>
        </base-dropdown-item>
        <hr class="border-gray-200 my-2 dark:border-gray-700" />
        <base-dropdown-item @click="signOut()">
          <i class="bi bi-box-arrow-right text-danger text-xl mr-2" />
          <span>Sign Out</span>
        </base-dropdown-item>
      </template>

    </base-dropdown>
  </template>

  <template v-else>
    <base-button
      @click="$router.push({ name: 'SignIn' })"
      class="btn-text-primary mr-2"
      >Sign In</base-button
    >
    <base-button
      @click="$router.push({ name: 'SignUp' })"
      class="btn-bg-primary"
      >Sign Up</base-button
    >
  </template>
</template>

<script>
import { auth } from "@/firebase.js";
import DarkModeToggle from "@/components/DarkModeToggle.vue";
export default {
  components: {
    DarkModeToggle,
  },
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    async signOut() {
      try {
        await auth.signOut();
        if (this.$route.meta.requiresAuth) {
          this.$router.push({ name: "Home" });
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>