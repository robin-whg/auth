<template>
  <div
    class="fixed w-full flex flex-col px-4 justify-center items-center bottom-0 z-50"
  >
    <template v-for="alert in alerts" :key="alert.id">
        <the-alert-list-alert :alert="alert" />
    </template>

  </div>
</template>

<script>
import TheAlertListAlert from './TheAlertListAlert.vue'
export default {
    components: {
        TheAlertListAlert
    },
    computed: {
        alerts() { return this.$store.state.core.alerts }
    },
};
</script>

<style lang="scss" scoped>
</style>