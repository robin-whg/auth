<template>
  <button
    :disabled="loading"
    :class="{ 'cursor-default': loading }"
    class="py-2 px-4 font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
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
.loading {
  position: absolute;
  background: red;
  z-index: 100;
}
</style>