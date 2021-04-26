<template>
  <div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="flex justify-end mb-2 space-x-2">
          <base-search v-model.trim="searchQuery" placeholder="Search..." @search-event="search()"/>
          <user-list-create class="" />
        </div>
        <div
          class="shadow-sm overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-xl"
        >
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
import UserListCreate from "./UserListCreate.vue";
import UserListItem from "./UserListItem.vue";
import UserListItemLoading from "./UserListItemLoading.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    UserListCreate,
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
      getUsers: "admin/getUsers"
    }),
    async loadUsers() {
      this.loading = true;
      await this.listUsers();
      this.loading = false;
    },
    async loadMore() {
      this.loadingMore = true;
      await this.listUsers();
      this.loadingMore = false;
    },
    async search() {
      console.log('search')
      this.loading = true
      await this.getUsers(this.searchQuery)
      this.loading = false
    }
  },
  created() {
    this.loadUsers();
  },
};
</script>

<style scoped>
</style>