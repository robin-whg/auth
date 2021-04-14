<template>
  <div class="container p-4 mx-auto">
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>

    <base-badge class="alert-secondary"> Badge </base-badge>
    <base-badge class="alert-info"> Badge </base-badge>
    <base-badge class="alert-success"> Badge </base-badge>
    <base-badge class="alert-warning"> Badge </base-badge>
    <base-badge class="alert-danger"> Badge </base-badge>
    <base-badge class="alert-primary"> Badge </base-badge>

    <base-alert v-if="displayAlert" @dismiss="displayAlert = false" type="success" class="mb-2" dismissable>This is an alert.</base-alert>
    <base-alert type="warning" class="mb-2" >This is another alert.</base-alert>
    <base-alert type="info" class="mb-2" >This is another alert.</base-alert>
    <base-alert type="danger" class="mb-2" >This is another alert.</base-alert>

    <base-modal v-if="modal" @close-event="close">
      <template v-slot:default>
        <h1>Are you sure?</h1>
        <base-alert type="danger" class="my-4">This action cannot be undone.</base-alert>
      </template>
      <template v-slot:footer>
        <base-button @click="confirm" class="btn-danger"
          >Delete</base-button
        >
      </template>
    </base-modal>
    <base-button @click="modal = true" class="mb-2 btn-primary">
      Modal
    </base-button>
    <base-button
    class="btn-primary"
      @click="
        $store.dispatch('core/addAlert', {
          type: 'success',
          message: 'This in an alert.',
        })
      "
      >Alert</base-button
    >
    <div class="max-w-xs grid grid-cols-2 gap-2">
      <div v-for="variant in buttonVariants" :key="variant">
        <base-button :class="variant">Button</base-button>
      </div>
    </div>
  </div>
</template>

x
<script>
import { ref } from "vue";
export default {
  setup() {
    const displayAlert = ref(true)
    const modal = ref(false);
    const buttonVariants = ref([
      "link-secondary",
      "btn-secondary",
      "link-info",
      "btn-info",
      "link-success",
      "btn-success",
      "link-warning",
      "btn-warning",
      "link-danger",
      "btn-danger",
      "link-primary",
      "btn-primary"
    ]);
    function close() {
      modal.value = false;
    }
    function confirm() {
      console.log("confirm");
      modal.value = false;
    }
    return { modal, close, confirm, buttonVariants, displayAlert };
  },
};
</script>
