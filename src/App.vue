<template>
  <div
    class="text-gray-900 dark:text-gray-50 bg-gray-50 dark:bg-gray-900 min-h-screen"
  >
    <the-nav></the-nav>
    <router-view />
  </div>
</template>

<script>
import TheNav from "@/components/TheNav.vue";
export default {
  components: {
    TheNav,
  },
  setup() {
    function setDarkModeClass() {
      if (
        document.cookie
          .split(";")
          .some((item) => item.includes("darkMode=true"))
      ) {
        console.log('toggling')
        document.querySelector("body").classList.add("dark");
      }
    }
    return { setDarkModeClass };
  },
  created() {
    this.setDarkModeClass();
  },
};
</script>

<style lang="scss" scoped>
</style>