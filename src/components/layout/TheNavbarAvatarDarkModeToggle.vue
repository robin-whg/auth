<template>
  <button
    @click="toggle()"
    class="text-left w-full px-4 py-1 flex justify-between items-center hover:bg-gray-200 dark:hover:bg-gray-700"
  >
    Dark Mode
  </button>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const darkMode = ref(false)
    function toggle() {
      if(darkMode.value) {
        localStorage.removeItem('darkMode')
        document.querySelector("body").classList.remove("dark");
        darkMode.value = false
      } else {
        localStorage.setItem('darkMode', 'true')
        document.querySelector("body").classList.add("dark");
        darkMode.value = true
      }
    }
    return { toggle, darkMode };
  },
  mounted() {
    this.darkMode = localStorage.getItem('darkMode') || false
  },
};
</script>

<style lang="scss" scoped>
</style>