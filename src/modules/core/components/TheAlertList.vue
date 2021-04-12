<template>
  <div
    class="fixed w-full flex flex-col px-4 justify-center items-center bottom-0 z-50"
  >
    <template v-for="alert in alerts" :key="alert.id">
      <base-alert
        class="mb-2 max-w-4xl"
        dismissable
        @dismiss="remove(alert)"
        :autoDismiss="5000"
        :type="alert.type"
        >{{ alert.message }}</base-alert
      >
    </template>
  </div>
</template>

<script>
export default {
  computed: {
    alerts() {
      return this.$store.state.core.alerts;
    },
  },
  methods: {
    remove(alert) {
      this.$store.dispatch("core/removeAlert", alert);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>