<template>
  <nav v-show="!$route.meta.fullscreen" class="flex justify-between px-4 py-2 items-center">
    <router-link class="flex text-xl items-center" to="/">
      <img src="@/assets/logo.svg" class="h-8 w-auto mr-1" alt="logo" />
      <span>{{ name }} </span>
    </router-link>
    <div>
        <the-nav-user></the-nav-user>
    </div>
  </nav>
</template>

<script>
import { ref } from "vue";
import TheNavUser from '@/components/TheNavUser.vue'
export default {
    components: {
        TheNavUser
    },
  setup() {
    const name = ref("Auth");

    return { name };
  },
};
</script>

<style lang="scss" scoped>
</style>