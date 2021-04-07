<template>
  <div class="pb-4 border-0 px-0 bg-transparent">
    <label class="font-semibold" v-if="label">{{ label }}</label>
    <span class="float-right">
      <slot />
    </span>
    <input
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="w-full rounded-lg hover:bg-transparent hover:border-gray-200 border-2 dark:hover:border-gray-700 focus:bg-transparent bg-gray-200  dark:bg-gray-700 focus:ring-0 focus:border-gray-200 dark:focus:border-gray-700"
      :class="[
        error ? 'border-red-500' : 'border-gray-200 dark:border-gray-700',
      ]"
    />
    <p class="text-red-500">{{ error }}</p>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    error: {
      type: String,
      default: "",
    },
  },
};
</script>