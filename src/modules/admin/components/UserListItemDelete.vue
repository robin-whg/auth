<template>
  <div>
    <base-alert type="danger" class="mb-4"
      >Are your sure? This action cannot be undone.</base-alert
    >
    <div class="flex justify-end space-x-2">
      <base-button @click="$emit('close-event')" class="link-secondary"
        >Cancel</base-button
      >
      <base-button :loading="loading" @click="deleteUser()" class="btn-danger"
        >Delete User</base-button
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    async deleteUser() {
      this.loading = true;
      const res = await this.$store.dispatch("admin/deleteUser", this.user);
      this.loading = false;
      if (res) this.$emit("close-event");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>