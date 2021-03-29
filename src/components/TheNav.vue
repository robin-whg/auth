<template>
  <nav class="flex justify-between p-4 items-center">
    <router-link class="flex text-2xl items-center" to="/">
      <img src="@/assets/logo.png" class="h-10 mr-1" alt="logo" />
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