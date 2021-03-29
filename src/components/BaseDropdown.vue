
<template>
  <div class="relative float-right">
    <div @click="toggleVisibility" class="cursor-pointer select-none">
      <slot name="button" />
    </div>
    <ul
      v-if="isVisible"
      class="absolute shadow overflow-hidden rounded-xl mt-2 py-2"
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
    function toggleVisibility() {
        isVisible.value = !isVisible.value
    }
    const pos = computed(() => {
      return props.position === "right" ? "right-0" : "left-0";
    });
    return { isVisible, toggleVisibility, pos };
  },
};
</script>

<style scoped>
</style>