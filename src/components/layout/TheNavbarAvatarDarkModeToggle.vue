<template>
  <button
    @click="toggle()"
    class="text-left w-full px-4 py-1 flex justify-between items-center hover:bg-gray-200 dark:hover:bg-gray-700"
  >
    <span class="flex whitespace-nowrap items-center" v-if="darkMode">
      <base-icon name="sun" class="h-6 w-6 text-yellow-300 mr-2" />
      Light Mode
    </span>
    <span class="flex items-center whitespace-nowrap" v-else>
      <base-icon name="moon" class="h-6 w-6 text-gray-500 mr-2" />
      Dark Mode
    </span>
  </button>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const darkMode = ref(false);
    function toggle() {
      if (darkMode.value) {
        localStorage.removeItem("darkMode");
        document.querySelector("body").classList.remove("dark");
        darkMode.value = false;
      } else {
        localStorage.setItem("darkMode", "true");
        document.querySelector("body").classList.add("dark");
        darkMode.value = true;
      }
    }
    return { toggle, darkMode };
  },
  mounted() {
    localStorage.getItem("darkMode")
      ? (this.darkMode = true)
      : (this.darkMode = false);
  },
};
</script>

<style lang="scss" scoped>
</style>