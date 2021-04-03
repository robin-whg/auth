<template>
  <div class="container mx-auto">
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <base-badge class="alert-danger">
      Badge
    </base-badge>
    <base-modal v-if="modal" @close-event="close">
      <template v-slot:default>
        <h1>Are you sure?</h1>
        <p>You can't undo this action.</p>
      </template>
      <template v-slot:footer>
        <base-button @click="confirm" class="text-red-700 bg-red-200"
          >Delete</base-button
        >
      </template>
    </base-modal>
    <base-spinner/>
    <base-button circle @click="modal = true" class="mb-2 btn-bg-primary"
      >
        Modal
      </base-button
    >
    <base-button class="btn-bg-success mb-2" size="sm">test</base-button>
    <base-button class="btn-bg-warning mb-2">test</base-button>
    <base-button class="btn-bg-danger mb-2" size="lg">test</base-button>
    <div class="max-w-sm grid grid-cols-3 gap-2">
      <div v-for="variant in buttonVariants" :key="variant">
        <base-button :class="variant">Button</base-button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const modal = ref(false);
    const buttonVariants = ref([
      "btn-text-primary",
      "btn-alert-primary",
      "btn-bg-primary",
      "btn-text-danger",
      "btn-alert-danger",
      "btn-bg-danger",
      "btn-text-secondary",
      "btn-alert-secondary",
      "btn-bg-secondary"
    ]);
    function close() {
      modal.value = false;
    }
    function confirm() {
      console.log("confirm");
      modal.value = false;
    }
    return { modal, close, confirm, buttonVariants };
  },
};
</script>
