
<template>
  <div ref="dropdown" class="relative float-right">
    <div
      @click="isVisible = !isVisible"
      class="cursor-pointer select-none"
    >
      <slot name="button" />
    </div>
    <div
      id="dropdown-items"
      v-if="isVisible"
      class="z-10 absolute shadow overflow-hidden rounded-xl mt-2 py-2 bg-gray-100 dark:bg-gray-800"
      :class="position === 'right' ? 'right-0' : 'left-0'"
    >
      <slot name="items" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    position: {
      type: String,
      default: "left",
    },
  },
  setup() {
    const isVisible = ref(false);
    const dropdown = ref(null);
    function addEventListeners() {
      window.addEventListener("click", () => {
        isVisible.value = false;
      });
      dropdown.value.addEventListener("click", (e) => {
        e.stopPropagation();
      });
    }
    function removeEventListeners() {
      window.removeEventListener("click", () => {
        isVisible.value = false;
      });
      dropdown.value.removeEventListener("click", (e) => {
        e.stopPropagation();
      });
    }
    return {
      isVisible,
      addEventListeners,
      removeEventListeners,
      dropdown,
    };
  },
  mounted() {
    this.addEventListeners();
  },
  onUnmounted() {
    this.removeEventListeners();
  },
};
</script>

<style scoped>
</style>