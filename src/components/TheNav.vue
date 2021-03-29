<template>
  <nav v-show="!$route.meta.noNav" class="flex justify-between p-4 items-center">
    <router-link class="flex text-2xl items-center" to="/">
      <img src="@/assets/logo.svg" class="h-10 w-auto mr-1" alt="logo" />
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
    const name = ref("Name");

    return { name };
  },
};
</script>

<style lang="scss" scoped>
</style>