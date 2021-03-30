<template>
  <div class="text-gray-900 dark:text-gray-50 bg-gray-50 dark:bg-gray-900 min-h-screen">
    <the-nav></the-nav>
    <router-view/>
  </div>
</template>

<script>
import TheNav from '@/components/TheNav.vue'
export default {
  components: {
    TheNav
  },
  setup () {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>