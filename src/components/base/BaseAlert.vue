<template>
  <div
    :class="style.color"
    class="rounded-xl shadow-sm py-2 px-4 min-w-96 space-x-4 flex justify-between w-max items-center"
  >
    <div class="flex items-center space-x-4">
      <i :class="style.icon" class="py-2 bi text-2xl" />
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
      <i class="bi bi-x text-2xl" />
    </base-button>
  </div>
</template>

<script>
export default {
  props: {
    variant: {
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
      switch (this.variant) {
        case "success":
          style.icon = "bi-check-circle";
          style.color = "alert-success";
          break;
        case "danger":
          style.icon = "bi-x-circle";
          style.color = "alert-danger";
          break;
        case "warning":
          style.icon = "bi-exclamation-circle";
          style.color = "alert-warning";
          break;
        default:
          style.icon = "bi-info-circle";
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