<template>
  <div
    class="flex items-center rounded-lg space-x-2 px-2 border-0 bg-gray-200 dark:bg-gray-700 "
  >
    <button @click="$emit('search-event')">
      <base-icon name="search" class="link-secondary" />
    </button>
    <label class="sr-only">Search</label>
    <input
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @keyup.enter="$emit('search-event')"
      type="text"
      class="bg-transparent border-0 active:border-0 active:ring-0 focus:border-0 focus:ring-0"
    />
    <button :class="{ 'invisible': modelValue.length === 0 }" @click="clear()">
      <base-icon name="backspace" class="link-secondary" />
    </button>
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
  methods: {
    clear() {
      this.$emit("update:modelValue", "");
      this.$emit("clear-event");
    },
  },
};
</script>

<style lang="scss" scoped></style>
