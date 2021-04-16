<template>
  <div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow-sm overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-xl"
        >
          <!--
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
          -->
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
      <div class="flex justify-center">
        <base-button
          :disabled="!pageToken"
          :class="{ invisible: !pageToken }"
          :loading="loadingMore"
          @click="loadMore"
          class="btn-secondary my-4"
          >Load More</base-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import UserListItem from "./UserListItem.vue";
import UserListItemLoading from "./UserListItemLoading.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    UserListItem,
    UserListItemLoading,
  },
  data() {
    return {
      searchQuery: "",
      refreshLoading: false,
      loading: false,
      loadingMore: false,
    };
  },
  computed: {
    ...mapState("admin", ["users", "pageToken", "maxResults"]),
  },
  methods: {
    ...mapActions({
      listUsers: "admin/listUsers",
    }),
    async loadUsers() {
      this.loading = true;
      await this.listUsers()
      this.loading = false;
    },
    async loadMore() {
      this.loadingMore = true;
      await this.listUsers()
      this.loadingMore = false;
    },
    async refresh() {
      console.log("refresh");
    },
  },
  created() {
    this.loadUsers();
  },
};
</script>

<style scoped>
</style>