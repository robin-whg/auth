<template>
  <base-button
    title="Edit"
    @click="visible = true"
    rounded
    class="link-danger"
    size="sm"
  >
    <base-icon name="trash" />
  </base-button>
  <base-modal v-if="visible" @close-event="visible = false">
    <h2 class="mb-4">Delete User</h2>
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
  </base-modal>
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
      visible: false,
      loading: false,
    };
  },
  methods: {
    async deleteUser() {
      this.loading = true;
      const res = await this.$store.dispatch("admin/deleteUser", this.user);
      this.loading = false;
      if (res) this.visible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>