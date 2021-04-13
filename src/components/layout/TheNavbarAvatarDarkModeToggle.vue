<template>
  <button
    @click="toggle()"
    class="text-left w-full px-4 py-1 flex justify-between items-center hover:bg-gray-200 dark:hover:bg-gray-700"
  >
    <div v-if="!darkMode" class="flex">
      <base-icon name="moon" class="mr-2 text-secondary" />
      <span>Dark Mode</span>
    </div>
    <div v-else class="flex">
      <base-icon name="sun" class="mr-2 text-secondary" />
      <span>Light Mode</span>
    </div>
  </button>
</template>

<script>
import { ref, computed } from "vue";
export default {
  setup() {
    const cookie = ref("");
    const darkMode = computed(() => {
      const value =
        cookie?.value
          .split(";")
          .some((item) => item.includes("darkMode=true")) || false;
      return value;
    });
    function toggle() {
      if (darkMode.value) {
        document.cookie =
          "darkMode=false; expires= Thu, 21 Aug 2050 20:00:00 UTC; path=/;SameSite=Lax";
        document.querySelector("body").classList.remove("dark");
      } else {
        document.cookie =
          "darkMode=true; expires= Thu, 21 Aug 2050 20:00:00 UTC; path=/;SameSite=Lax";
        document.querySelector("body").classList.add("dark");
      }
      cookie.value = document.cookie;
    }
    return { toggle, cookie, darkMode };
  },
  mounted() {
    this.cookie = document.cookie;
  },
};
</script>

<style lang="scss" scoped>
</style>