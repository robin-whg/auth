<template>
  <div class="container p-4 mx-auto">
    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow-sm overflow-hidden border-gray-200 rounded-xl">
            <div class="bg-gray-50 flex items-center space-x-4 py-2 px-4">
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
                <base-icon name="refresh" />
              </base-button>
            </div>
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    UID
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Roles
                  </th>
                  <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-gray-50 divide-y divide-gray-200">
                <user-list-item
                  v-for="user in users"
                  :key="user.uid"
                  :user="user"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as service from "../admin.service.js";
import UserListItem from "../components/UserListItem.vue";
export default {
  components: {
    UserListItem,
  },
  data() {
    return {
      users: [],
      searchQuery: "",
    };
  },
  methods: {
    async listUsers() {
      const { data } = await service.listUsers();
      this.users = data.users;
      console.log(data.users);
    },
  },
  async created() {
    this.listUsers();
  },
};
</script>

<style lang="scss" scoped>
</style>