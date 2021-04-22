<template>
  <base-button
    title="Edit"
    @click="visible = true"
    rounded
    class="link-secondary"
    size="sm"
  >
    <base-icon name="pencil-alt" />
  </base-button>
  <base-modal v-if="visible" @close-event="visible = false">
    <h2 class="mb-4">Edit User</h2>
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
      <base-form-input
        v-model.trim="editedUser.phoneNumber"
        label="Phone Number"
        type="number"
      />
      <base-form-tags label="Roles" v-model="customClaims" class="mb-2" />
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
      editedUser: {},
      customClaims: [],
    };
  },
  watch: {
    // whenever question changes, this function will run
    visible: function (newValue) {
      if (newValue) {
        this.editedUser = { ...this.user };
        this.initClaims();
      } else {
        this.editedUser = {};
        this.customClaims = [];
      }
    },
  },
  methods: {
    async sumbit() {
      this.loading = true;
      const user = await this.$store.dispatch(
        "admin/updateUser",
        this.editedUser
      );
      const claims = {};
      this.customClaims.forEach((x) => (claims[x] = true));
      const res = await this.$store.dispatch("admin/setCustomUserClaims", {
        uid: user.uid,
        claims,
      });
      this.loading = false;
      if (res) this.visible = false;
    },
    initClaims() {
      if (this.user.customClaims)
        this.customClaims = Object.keys(this.user.customClaims);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>