<template>
  <tr>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="flex items-center">
        <div
          class="font-semibold rounded-full select-none btn-secondary h-10 w-10 flex justify-center items-center"
        >
          <span class="">{{ user.email.charAt(0).toUpperCase() }}</span>
        </div>
        <div class="ml-4">
          <div class="text-sm font-medium">
            {{ user.displayName }}
          </div>
          <div class="text-sm text-secondary">{{ user.email }}</div>
        </div>
        <div class="px-2">
          <base-icon v-if="user.emailVerified" class="text-primary" name="badge-check" />
        </div>
      </div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="text-sm">{{ user.uid }}</div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <base-badge v-if="!user.disabled" class="alert-success">
        Active
      </base-badge>
      <base-badge v-else class="alert-danger"> Disabled </base-badge>
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-secondary">
      <template v-if="user.customClaims">
        <base-badge
          v-for="claim in Object.keys(user.customClaims)"
          :key="claim"
          class="alert-info"
        >
          {{ claim }}
        </base-badge>
      </template>
    </td>
    <td class="px-6">
      <div class="flex justify-end space-x-4">
        <base-button
          @click="copyEmail()"
          rounded
          title="Copy Email"
          class="link-secondary"
          size="sm"
        >
          <base-icon name="clipboard" />
        </base-button>
        <user-list-item-edit :user="user" />
        <user-list-item-delete :user="user" />
      </div>
    </td>
  </tr>
</template>

<script>
import UserListItemDelete from "./UserListItemDelete.vue";
import UserListItemEdit from "./UserListItemEdit.vue";
export default {
  components: { UserListItemEdit, UserListItemDelete },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      modalEdit: false,
      modalDelete: false,
    };
  },
  methods: {
    async copyEmail() {
      try {
        await navigator.clipboard.writeText(this.user.email);
        this.$store.dispatch("core/addAlert", {
          type: "success",
          message: "Email copied to clipboard.",
        });
      } catch (error) {
        this.$store.dispatch("core/addAlert", {
          type: "danger",
          message: error.message,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>