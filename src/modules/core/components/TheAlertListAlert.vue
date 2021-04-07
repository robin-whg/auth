<template>
  <base-card
    :class="style.color"
    class="flex justify-between w-full sm:max-w-2xl mb-4 items-center"
  >
    <div class="flex items-center">
      <i :class="style.icon" class="bi text-2xl mr-2" />
      <span>
        {{ alert.message }}
      </span>
    </div>
    <base-button
      pill
      size="sm"
      @click="remove"
      class="hover:bg-white hover:bg-opacity-20"
    >
      <i class="bi bi-x text-2xl" />
    </base-button>
  </base-card>
</template>

<script>
export default {
  props: {
    alert: {
      type: Object,
      required: true,
    },
  },
  data() {
      return {
          timeout: null
      }
  },
  computed: {
    style() {
      const style = {
        icon: "",
        color: "",
      };
      switch (this.alert.type) {
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
    remove() {
      this.$store.dispatch('alert/remove', this.alert);
    },
  },
  mounted() {
    this.timeout = setTimeout(() => this.remove(), 5000);
  },
  beforeUnmount() {
    clearTimeout(this.timeout);
  },
};
</script>

<style lang="scss" scoped>
</style>