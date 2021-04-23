<template>
  <div class="flex container flex-col items-center p-4">
    <base-icon class="text-danger" name="lock-closed" size="h-24 w-24" />
    <h1 class="mb-2">Access Denied</h1>
    <base-alert class="sm:max-w-md" type="danger">
      User is not authorized to view this page. 
    </base-alert>
 </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
