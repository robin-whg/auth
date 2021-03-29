<template>
  <div class="pb-4 border-0 px-0">
    <label class="font-semibold" v-if="label">{{ label }}</label>
    <span class="float-right">
      <slot />
    </span>
    <input
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="w-full rounded-lg hover:bg-transparent border-gray-100 hover:border-gray-200 focus:bg-transparent focus:ring-0 focus:border-gray-200"
      :class="[
        error ? 'bg-red-100 border-red-100' : 'bg-gray-100 border-gray-100',
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