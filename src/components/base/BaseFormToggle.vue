<template>
  <div>
    <label class="flex items-center justify-between">
      <input
        type="checkbox"
        :checked="modelValue"
        @change="$emit('update:modelValue', $event.target.checked)"
        class="hidden"
      />
      <span class="font-semibold" v-if="label">{{ label }}</span>
      <i class="cursor-pointer">
        <svg
          v-if="modelValue"
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10 text-primary"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            d="M5,3C2.257,3 -0,5.257 0,8C0,10.743 2.257,13 5,13L11,13C13.743,13 16,10.743 16,8C16,5.257 13.743,3 11,3L5,3ZM11,12C8.806,12 7,10.194 7,8C7,5.806 8.806,4 11,4C13.194,4 15,5.806 15,8C15,10.194 13.194,12 11,12Z"
            style="fill-rule: nonzero"
          />
          <path
            d="M11,12C8.806,12 7,10.194 7,8C7,5.806 8.806,4 11,4C13.194,4 15,5.806 15,8C15,10.194 13.194,12 11,12Z"
            style="fill: white"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10 text-gray-200 dark:text-gray-700 transform rotate-180"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            d="M5,3C2.257,3 -0,5.257 0,8C0,10.743 2.257,13 5,13L11,13C13.743,13 16,10.743 16,8C16,5.257 13.743,3 11,3L5,3ZM11,12C8.806,12 7,10.194 7,8C7,5.806 8.806,4 11,4C13.194,4 15,5.806 15,8C15,10.194 13.194,12 11,12Z"
            style="fill-rule: nonzero"
          />
          <path
            d="M11,12C8.806,12 7,10.194 7,8C7,5.806 8.806,4 11,4C13.194,4 15,5.806 15,8C15,10.194 13.194,12 11,12Z"
            style="fill: white"
          />
        </svg>
      </i>
    </label>
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
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>