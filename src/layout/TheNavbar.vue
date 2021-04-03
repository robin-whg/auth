<template>
  <nav v-if="!$route.meta.fullscreen" class="flex justify-between px-4 py-2 items-center">
    <router-link class="flex text-xl items-center" to="/">
      <img src="@/assets/logo.svg" class="h-8 w-auto mr-1" alt="logo" />
      <span>{{ name }} </span>
    </router-link>
    <div>
        <the-navbar-user />
    </div>
  </nav>
</template>

<script>
import { ref } from "vue";
import TheNavbarUser from '@/layout/TheNavbarUser.vue'
export default {
    components: {
        TheNavbarUser
    },
  setup() {
    const name = ref("Auth");

    return { name };
  },
};
</script>

<style lang="scss" scoped>
</style>