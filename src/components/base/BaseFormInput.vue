<template>
  <div class="border-0 px-0 bg-transparent">
    <label class="font-semibold" :class="{ 'sr-only': srOnly }" v-if="label">{{
      label
    }}</label>
    <span class="float-right">
      <slot />
    </span>
    <input
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="w-full rounded-lg focus:ring-2 bg-gray-200 dark:bg-gray-700"
      :class="[
        error ? 'border-danger focus:ring-danger border-2' : ' border-0 focus:ring-primary',
      ]"
    />
    <p class="text-danger">{{ error }}</p>
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
    srOnly: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>