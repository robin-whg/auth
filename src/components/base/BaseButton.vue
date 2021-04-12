<template>
  <button
    :disabled="loading"
    :class="[
      { 'cursor-default': loading },
      pill ? 'rounded-full' : 'rounded-lg',
      { 'py-1 px-2 text-sm': size === 'sm' },
      { 'py-2 px-3': size === 'md' },
      { 'py-3 px-4 text-xl': size === 'lg' },
    ]"
    class="font-semibold flex items-center justify-center"
  >
    <span :class="{ invisible: loading }" class="whitespace-nowrap">
      <slot />
    </span>
    <base-spinner v-if="loading" class="absolute" />
  </button>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    pill: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "md",
    },
  },
};
</script>