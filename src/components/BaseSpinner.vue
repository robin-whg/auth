<template>
  <svg
    :class="[width]"
    class="animate-spin mx-auto h-auto"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="50" r="45" />
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: "w-6",
    },
  },
};
</script>

<style scoped>
circle {
  fill: transparent;
  stroke: currentColor;
  stroke-width: 8;
  stroke-dasharray: 214;
  stroke-linecap: round;
  transform-origin: 50% 50%;
}
</style>