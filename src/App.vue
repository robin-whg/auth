<template>
  <div
    class="text-gray-900 dark:text-gray-50 bg-1 min-h-screen"
  >
    <the-navbar />
    <router-view />
  </div>
</template>

<script>
import TheNavbar from "@/layout/TheNavbar.vue";
export default {
  components: {
    TheNavbar,
  },
  setup() {
    function setDarkModeClass() {
      if (
        document.cookie
          .split(";")
          .some((item) => item.includes("darkMode=true"))
      ) {
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