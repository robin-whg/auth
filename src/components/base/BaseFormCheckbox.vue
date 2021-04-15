<template>
  <label class="flex items-center select-none">
    <input
      type="checkbox"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
      class="rounded mr-2"
      :class="[modelValue ? 'border-primary-500 bg-primary-500' : 'border-gray-200 bg-gray-200 dark:border-gray-700 dark:bg-gray-700']"
    />
    <span class="font-semibold" v-if="label">
      {{ label }}
    </span>
  </label>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>