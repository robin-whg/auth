<template>
  <base-button @click="visible = true" class="btn-primary" v-bind="$attrs">
    Create User
  </base-button>
  <base-modal v-if="visible" @close-event="visible = false">
    <h2 class="mb-4">Create User</h2>
    <base-alert type="info">
      <ul class="list-inside">
        <li>Leave out any fields that you don't want to set.</li>
        <li>A UID will be generated.</li>
      </ul>
    </base-alert>
    <form @submit.prevent="submit()" novalidate>
      <base-form-input v-model.trim="newUser.uid" label="UID" type="text" />
      <base-form-input
        v-model.trim="newUser.displayName"
        label="Display Name"
        type="text"
      />
      <base-form-input
        :error="errorEmail"
        v-model.trim="newUser.email"
        label="E-Mail*"
        type="email"
      />
      <base-form-input
        v-model.trim="newUser.password"
        label="Password"
        type="password"
      />
      <base-form-input
        v-model.trim="newUser.phoneNumber"
        label="Phone Number"
        type="number"
      />
      <base-form-tags label="Roles" v-model="customClaims" class="mb-2" />
      <base-form-toggle
        class="mt-2"
        label="Verified E-Mail"
        v-model="newUser.emailVerified"
      />
      <base-form-toggle
        label="Disabled"
        class="mt-2"
        v-model="newUser.disabled"
      />
      <div class="flex justify-end mt-4">
        <base-button :loading="loading" type="submit" class="btn-primary w-full"
          >Add User</base-button
        >
      </div>
    </form>
  </base-modal>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      loading: false,
      errorEmail: "",
      newUser: {
        uid: undefined,
        email: undefined,
        emailVerified: false,
        phoneNumber: undefined,
        password: undefined,
        displayName: undefined,
        disabled: false,
      },
      customClaims: [],
    };
  },
  watch: {
    // whenever question changes, this function will run
    visible: function (newValue) {
      if (newValue === false) {
        this.visible = false;
        this.loading = false;
        this.errorEmail = "";
        this.newUser = {
          uid: undefined,
          email: undefined,
          emailVerified: false,
          phoneNumber: undefined,
          password: undefined,
          displayName: undefined,
          disabled: false,
        };
        this.customClaims = [];
      }
    },
  },
  methods: {
    async submit() {
      this.loading = true;
      this.errorEmail = "";
      if (
        !this.newUser.email ||
        !this.newUser.email.match(
          /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
        )
      ) {
        this.errorEmail = "Please enter a valid email.";
      }
      if (!this.errorEmail) {
        const user = await this.$store.dispatch(
          "admin/createUser",
          this.newUser
        );
        const claims = {};
        this.customClaims.forEach((x) => (claims[x] = true));
        const res = await this.$store.dispatch("admin/setCustomUserClaims", {
          uid: user.uid,
          claims,
        });
        if (res) this.visible = false;
      }
      this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>