<template>
  <div class="flex items-center">
    <template v-if="user">
      <base-dropdown position="right">
        <template #button>
          <base-button rounded size="sm" class="link-secondary">
            <base-icon name="user-circle" size="h-8 w-8" />
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
          <the-navbar-avatar-dark-mode-toggle />
          <base-dropdown-item @click="$router.push({ name: 'Settings' })">
            <base-icon name="cog" class="text-secondary mr-2" />
            <span>Settings</span>
          </base-dropdown-item>
          <hr class="border-gray-200 my-2 dark:border-gray-700" />
          <base-dropdown-item @click="signOut()">
            <base-icon name="logout" class="text-danger mr-2" />
            <span>Sign Out</span>
          </base-dropdown-item>
        </template>
      </base-dropdown>
    </template>

    <template v-else>
      <base-button
        @click="$router.push({ name: 'SignIn' })"
        class="btn-primary mr-2"
        >Sign In</base-button
      >
    </template>
  </div>
</template>

<script>
import TheNavbarAvatarDarkModeToggle from "./TheNavbarAvatarDarkModeToggle.vue";
export default {
  components: {
    TheNavbarAvatarDarkModeToggle,
  },
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$store.state.authentication.user;
    },
  },
  methods: {
    async signOut() {
      try {
        await this.$store.dispatch("authentication/signOut");
        if (this.$route.meta.requiresAuth) {
          this.$router.push({ name: "SignIn" });
        }
      } catch (error) {
        const alert = {
          type: "danger",
          message: error,
        };
        this.$store.dispatch("core/add", alert);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>