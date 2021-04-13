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
          <hr class="border-gray-200 dark:border-gray-700" />
          <div class="flex items-center justify-end space-x-4 py-4 px-4">
            {{ pageTokens }}
            <base-button @click="prevPage()">Prev Page</base-button>
            <base-button @click="loadNextPage()">Next Page</base-button>
          </div>
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
      maxResults: 1,
      loading: false,
      pageTokens: [],
    };
  },
  computed: {
      nextPage() {
          return this.pageTokens[this.pageTokens.length - 1] 
      }
  },
  methods: {
    async listUsers(pageToken = undefined) {
      this.loading = true;
      try {
        const { data } = await service.listUsers({
          maxResults: this.maxResults,
          nextPageToken: pageToken,
        });

        console.log(data);

        if (data.pageToken) {
          this.nextPageToken = data.pageToken;
          this.pageTokens.push(data.pageToken);
        } else {
          this.nextPageToken = null;
        }

        this.users = data.users;
      } catch (error) {
        this.$store.dispatch("core/addAlert", {
          type: "danger",
          message: error.message,
        });
      }
      this.loading = false;
    },
    async loadNextPage() {

    },
    async prevPage() {

    },
    async refresh() {},
  },
  created() {
    this.listUsers();
  },
};
</script>

<style scoped>
</style>