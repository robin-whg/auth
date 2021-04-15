<template>
  <div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow-sm overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-xl"
        >
          <div class="flex items-center space-x-4 py-2 px-4">
            <base-form-input
              class="w-full"
              v-model.trim="searchQuery"
              label="Search"
              srOnly
              type="text"
              placeholder="Search for name, email, uid or role"
            ></base-form-input>
            <base-button class="btn-primary">
              <span>Add User</span>
            </base-button>
            <base-button size="sm" rounded class="link-secondary">
              <base-icon @click="refresh()" name="refresh" />
            </base-button>
          </div>
          <table
            class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
          >
            <thead class="">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider"
                >
                  UID
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider"
                >
                  Roles
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <template v-if="loading">
                <user-list-item-loading v-for="i in maxResults" :key="i" />
              </template>
              <template v-else>
                <user-list-item
                  v-for="user in users"
                  :key="user.uid"
                  :user="user"
                />
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as service from "../admin.service.js";
import UserListItem from "./UserListItem.vue";
import UserListItemLoading from "./UserListItemLoading.vue";
export default {
  components: {
    UserListItem,
    UserListItemLoading,
  },
  data() {
    return {
      users: [],
      searchQuery: "",
      refreshLoading: false,
      maxResults: 25,
      loading: false,
    };
  },
  methods: {
    async listUsers() {
      this.loading = true;
      try {
        const { data } = await service.listUsers({
          maxResults: 1000,
        });
        this.users = data.users;
      } catch (error) {
        this.$store.dispatch("core/addAlert", {
          type: "danger",
          message: error.message,
        });
      }
      this.loading = false;
    },
    async refresh() {
      await this.loading()
    },
  },
  created() {
    this.listUsers();
  },
};
</script>

<style scoped>
</style>