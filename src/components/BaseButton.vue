<template>
  <button
    :disabled="loading"
    :class="{ 'cursor-default': loading }"
    class="py-2 px-4 font-semibold rounded-lg focus:outline-none focus:ring-none"
  >
    <div class="flex items-center justify-center">
      <span :class="{ slot: loading }">
        <slot />
      </span>
      <span v-if="loading" class="absolute z-10 w-full">
        <svg
          class="animate-spin mx-auto"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="45" />
        </svg>
      </span>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.slot {
  visibility: hidden;
}
svg {
  max-width: 24px;
}
circle {
  fill: transparent;
  stroke: currentColor;
  stroke-width: 8;
  stroke-dasharray: 214;
  stroke-linecap: round;
  transform-origin: 50% 50%;
}
</style>