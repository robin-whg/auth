<template>
  <nav
    id="the-navbar"
    v-if="!$route.meta.fullscreen"
    class="border-b border-gray-200 dark:border-gray-700"
  >
    <div class="flex justify-between py-2 px-4">
      <div class="flex items-center space-x-2">
        <router-link class="flex font-bold text-xl items-center mr-4" to="/">
          <img src="@/assets/logo.svg" class="h-8 w-auto mr-1" alt="logo" />
          <span>{{ name }} </span>
        </router-link>
        <template v-for="link in links" :key="link.route">
          <router-link
            tag="base-button"
            class="rounded-xl py-2 px-4 hover:text-primary hidden sm:block font-semibold"
            :to="{ name: link.route }"
          >
            {{ link.name }}
          </router-link>
        </template>
      </div>

      <div class="flex">
        <the-navbar-avatar />
        <base-button
          size="sm"
          class="sm:hidden link-secondary"
          @click="isVisible = !isVisible"
        >
          <base-icon name="menu" size="h-8 w-8" />
        </base-button>
      </div>
    </div>
    <div v-if="isVisible" class="sm:hidden flex flex-col space-y-4 px-4 py-2">
      <template v-for="link in links" :key="link.route">
        <router-link :to="{ name: link.route }" class="font-semibold">
          {{ link.name }}
        </router-link>
      </template>
    </div>
  </nav>
</template>

<script>
import TheNavbarAvatar from "./TheNavbarAvatar.vue";
export default {
  components: {
    TheNavbarAvatar,
  },
  data() {
    return {
      name: "Auth",
      isVisible: false,
      links: [
        {
          name: "Home",
          route: "Home",
        },
        {
          name: "Settings",
          route: "Settings",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>