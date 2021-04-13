<template>
  <button
    :disabled="loading"
    :class="[
      { 'cursor-default': loading },
      pill ? 'rounded-full' : 'rounded-lg',
      { 'py-1 px-2 text-sm': size === 'sm' && !rounded },
      { 'py-2 px-3': size === 'md'  && !rounded},
      { 'py-3 px-4 text-xl': size === 'lg' && !rounded },
      { 'p-1 rounded-full text-sm': size === 'sm' && rounded },
      { 'p-2 rounded-full': size === 'md' && rounded },
      { 'p-3 rounded-full text-xl': size === 'lg' && rounded },
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
    rounded: {
      type: Boolean,
      default: false
    }
  },
};
</script>