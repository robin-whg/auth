<template>
  <tr>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="flex items-center">
        <div
          class="text-secondary font-semibold rounded-full btn-secondary h-10 w-10 flex justify-center items-center"
        >
          <span class="">{{ user.email.charAt(0).toUpperCase() }}</span>
        </div>
        <div class="ml-4">
          <div class="text-sm font-medium text-gray-900">
            {{ user.displayName }}
          </div>
          <div class="text-sm text-gray-500">{{ user.email }}</div>
        </div>
      </div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="text-sm text-gray-900">{{ user.uid }}</div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <base-badge v-if="!user.disabled" class="alert-success">
        Active
      </base-badge>
      <base-badge v-else class="alert-danger"> Disabled </base-badge>
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
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
        <base-button rounded class="link-secondary" size="sm">
          <base-icon name="clipboard" />
        </base-button>
        <base-button rounded class="link-secondary" size="sm">
          <base-icon name="pencil-alt" />
        </base-button>
        <base-button rounded class="link-danger" size="sm">
          <base-icon name="trash" />
        </base-button>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>