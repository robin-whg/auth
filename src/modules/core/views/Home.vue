<template>
  <div v-if="claims.employee || claims.admin" class="container p-4 mx-auto">
    <h1>Home</h1>
  </div>
  <base-deny v-else />
</template>

<script>
export default {
  computed: {
    claims() {
      return this.$store.getters["authentication/getClaims"];
    },
  },
};
</script>
