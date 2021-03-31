<template>
  <button
    @click="toggle()"
    class="text-left w-full px-4 py-1 flex items-center"
  >
    <i v-if="!darkMode" class="bi bi-toggle-off dark:text-gray-400 text-gray-600 text-xl mr-2"></i>
    <i v-else class="bi bi-toggle-on text-blue-500 text-xl mr-2"></i
    ><span>Dark Mode</span>
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
        document.cookie = "darkMode=false; expires= Thu, 21 Aug 2050 20:00:00 UTC; path=/;SameSite=Lax"
        document.querySelector('body').classList.remove('dark')
      } else {
        document.cookie = "darkMode=true; expires= Thu, 21 Aug 2050 20:00:00 UTC; path=/;SameSite=Lax"
        document.querySelector('body').classList.add('dark')
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