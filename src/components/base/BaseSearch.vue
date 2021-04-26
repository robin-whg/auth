<template>
  <div
    class="flex items-center rounded-lg border-0 bg-gray-200 dark:bg-gray-700 "
  >
    <button @click="$emit('search-event')" class="ml-2">
      <base-icon name="search" class="text-gray-400 dark:text-gray-600"/>
    </button>
    <label class="sr-only">Search</label>
    <input
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @keyup.enter="$emit('search-event')"
      type="text"
      class="bg-transparent mx-1 border-0 active:border-0 active:ring-0 focus:border-0 focus:ring-0"
    />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
