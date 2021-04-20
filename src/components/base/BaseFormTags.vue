<template>
  <div>
    <label class="font-semibold" :class="{ 'sr-only': srOnly }" v-if="label">{{
      label
    }}</label>
    <div class="rounded-xl border-0 px-2 bg-gray-200 dark:bg-gray-700">
      <base-badge
        v-for="(v, i) in modelValue"
        :key="i"
        class="my-2 alert-primary"
      >
        {{ v }}
        <button @click="remove(v)" class="pl-1">
          <base-icon name="x" size="h-4 w-4" />
        </button>
      </base-badge>
      <input
        class="bg-transparent border-0 focus:ring-0 focus:border-0"
        type="text"
        v-model.trim="input"
        @keyup.enter="add"
        @keydown.enter.prevent
        @keyup.space="add"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      default: "",
    },
    srOnly: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      input: "",
    };
  },
  methods: {
    add() {
      if (this.input) {
        const newValue = [...this.modelValue, this.input.toLowerCase()];
        this.$emit("update:modelValue", newValue);
        this.input = "";
      }
    },
    remove(v) {
      this.$emit(
        "update:modelValue",
        this.modelValue.filter((x) => x !== v)
      );
    },
  },
};
</script>

<style lang="scss" scoped>
</style>