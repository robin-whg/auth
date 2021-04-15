<template>
  <form @submit.prevent="sumbit()" novalidate>
    <base-form-input
      v-model.trim="editedUser.displayName"
      label="Display Name"
      type="text"
    />
    <base-form-input
      v-model.trim="editedUser.email"
      label="E-Mail"
      type="email"
    />
    <!--
    <base-form-input
      :error="errorPassword"
      v-model.trim="password"
      label="Password"
      type="password"
    />
    -->
    <base-form-input
      v-model.trim="editedUser.phoneNumber"
      label="Phone Number"
      type="number"
    />
    <base-form-toggle
      class="mt-2"
      label="Verified E-Mail"
      v-model="editedUser.emailVerified"
    />
    <base-form-toggle
      label="Disabled"
      class="mt-2"
      v-model="editedUser.disabled"
    />
    <div class="flex justify-end mt-4">
      <base-button :loading="loading" type="submit" class="btn-primary w-full"
        >Save Changes</base-button
      >
    </div>
  </form>
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
      editedUser: {},
    };
  },
  methods: {
    async sumbit() {
      this.loading = true;
      try {
        const res = await service.updateUser(this.editedUser)
        console.log(res)
        this.$emit('close-event')
      } catch (error) {
        this.$store.dispatch("core/addAlert", {
          type: "danger",
          message: error.message,
        });
      }
      this.loading = false;
    },
  },
  mounted() {
    this.editedUser = {...this.user};
  },
  unmounted() {
    this.editedUser = {}
  }
};
</script>

<style lang="scss" scoped>
</style>