<template>
  <div>
    <h1>Home</h1>
    <base-modal v-if="modal" @close-event="close">
      <template v-slot:default>
        <h1 class="text-4xl font-semibold">Are you sure?</h1>
        <p>You can't undo this action.</p>
      </template>
      <template v-slot:footer>
        <base-button @click="confirm" class="text-red-700 bg-red-200"
          >Delete</base-button
        >
      </template>
    </base-modal>
      <base-button @click="modal = true" class="bg-primary"
        >modal</base-button
      >
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
    const buttonVariants = ref(['text-primary', 'alert-primary', 'bg-primary', 'text-danger', 'alert-danger', 'bg-danger'])
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
