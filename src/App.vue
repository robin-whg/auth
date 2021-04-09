<template>
  <div
    class="text-gray-900 dark:text-gray-50 bg-gray-50 dark:bg-gray-900 min-h-screen"
  >
    <the-navbar />
    <router-view />
    <the-alert-list />
  </div>
</template>

<script>
import TheNavbar from "@/components/layout/TheNavbar.vue";
import TheAlertList from '@/modules/core/components/TheAlertList.vue';
export default {
  components: {
    TheNavbar,
    TheAlertList
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