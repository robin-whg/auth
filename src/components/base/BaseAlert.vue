<template>
  <div
    :class="style.color"
    class="rounded-xl w-full shadow-sm py-2 px-4 min-w-96 space-x-4 flex justify-between items-center"
  >
    <div class="flex items-center space-x-4">
      <base-icon :name="style.icon" class="h-8 w-8 my-2"/>
      <span class="font-semibold">
        <slot />
      </span>
    </div>
    <base-button
      v-if="dismissable"
      pill
      size="sm"
      @click="dismiss"
      class="hover:bg-white hover:bg-opacity-20"
    >
      <base-icon name="x" />
    </base-button>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "info",
    },
    dismissable: {
      type: Boolean,
      default: false,
    },
    autoDismiss: {
      type: Number,
    },
  },
  data() {
    return {
      timeout: null,
    };
  },
  computed: {
    style() {
      const style = {
        icon: "",
        color: "",
      };
      switch (this.type) {
        case "success":
          style.icon = "check-circle";
          style.color = "alert-success";
          break;
        case "danger":
          style.icon = "exclamation-circle";
          style.color = "alert-danger";
          break;
        default:
          style.icon = "information-circle";
          style.color = "alert-info";
      }
      return style;
    },
  },
  methods: {
    dismiss() {
      this.$emit("dismiss");
    },
  },
  mounted() {
    if (this.autoDismiss) {
      this.timeout = setTimeout(() => this.dismiss(), this.autoDismiss);
    }
  },
  beforeUnmount() {
    clearTimeout(this.timeout);
  },
};
</script>

<style lang="scss" scoped>
</style>