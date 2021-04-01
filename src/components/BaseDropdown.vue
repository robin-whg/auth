
<template>
  <div ref="dropdown" class="relative float-right">
    <div
      @click="isVisible = !isVisible"
      class="cursor-pointer select-none"
    >
      <slot name="button" />
    </div>
    <ul
      id="dropdown-items"
      v-if="isVisible"
      class="z-10 absolute shadow overflow-hidden rounded-xl mt-2 py-2 bg-2"
      :class="pos"
    >
      <slot name="items" />
    </ul>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  props: {
    position: {
      type: String,
      default: "left",
    },
  },
  setup(props) {
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
    const pos = computed(() => {
      return props.position === "right" ? "right-0" : "left-0";
    });
    return {
      isVisible,
      addEventListeners,
      removeEventListeners,
      dropdown,
      pos
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