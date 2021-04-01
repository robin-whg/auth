<template>
  <button
    :disabled="loading"
    :class="{ 'cursor-default': loading }"
    class="base-button"
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
.base-button {
  @apply px-4 py-2 rounded-lg;
}
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