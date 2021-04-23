<template>
  <div v-if="claims.admin" class="container mx-auto p-4">
    <user-list />
  </div>
  <base-deny v-else />
</template>

<script>
import UserList from "../components/UserList.vue";
export default {
  components: {
    UserList,
  },
  computed: {
    claims() {
      return this.$store.getters["authentication/getClaims"];
    },
  },
};
</script>

<style lang="scss" scoped></style>
