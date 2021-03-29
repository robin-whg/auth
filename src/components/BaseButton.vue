<template>
  <button
    :disabled="loading"
    :class="{ 'cursor-default': loading }"
    class="py-2 px-4 font-semibold rounded-lg focus:outline-none focus:ring-none"
  >
    <slot />
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
</style>