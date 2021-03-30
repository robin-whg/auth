<template>
  <div class="text-gray-800">
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