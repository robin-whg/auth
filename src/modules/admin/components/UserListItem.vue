<template>
  <tr>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="flex items-center">
        <div
          class="text-secondary font-semibold rounded-full select-none btn-secondary h-10 w-10 flex justify-center items-center"
        >
          <span class="">{{ user.email.charAt(0).toUpperCase() }}</span>
        </div>
        <div class="ml-4">
          <div class="text-sm font-medium">
            {{ user.displayName }}
          </div>
          <div class="text-sm text-secondary">{{ user.email }}</div>
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
        <base-button
          title="Edit"
          @click="modalEdit = true"
          rounded
          class="link-secondary"
          size="sm"
        >
          <base-icon name="pencil-alt" />
        </base-button>
        <base-button
          title="Löschen"
          @click="modalDelete = true"
          rounded
          class="link-danger"
          size="sm"
        >
          <base-icon name="trash" />
        </base-button>
      </div>
    </td>
  </tr>

  <base-modal v-if="modalEdit" @close-event="modalEdit = false">
    <template v-slot:default>
      <h2 class="mb-4">Edit User</h2>
      <user-list-item-edit-form @close-event="modalEdit = false" :user="user" />
    </template>
  </base-modal>

  <base-modal v-if="modalDelete" @close-event="modalDelete = false">
    <template v-slot:default>
      <h2 class="mb-4">Delete User</h2>
      <base-alert type="warning"
        >Are your sure? This action cannot be undone.</base-alert
      >
    </template>
    <template v-slot:footer>
      <base-button @click="modalDelete = false" class="mr-2 link-secondary"
        >Cancel</base-button
      >
      <base-button @click="deleteUser()" class="btn-danger">Delete</base-button>
    </template>
  </base-modal>
</template>

<script>
import UserListItemEditForm from './UserListItemEditForm.vue';
export default {
  components: { UserListItemEditForm },
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
      await navigator.clipboard.writeText(this.user.email);
    },
    deleteUser() {
      console.log("delete");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>