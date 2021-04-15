<template>
  <base-modal @close-event="$emit('close-event')">
    <template v-slot:default>
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
    </template>
  </base-modal>
</template>

<script>
import * as service from "../admin.service.js";
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
      try {
        const res = await service.deleteUser({ uid: this.user.uid });
        console.log(res);
        this.$emit('close-event')
        this.$store.dispatch("core/addAlert", {
          type: "success",
          message: 'Successfully deleted user.',
        });
      } catch (error) {
        this.$store.dispatch("core/addAlert", {
          type: "danger",
          message: error.message,
        });
      }
      this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>