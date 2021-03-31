<template>
  <div>
    <h1>Home</h1>
    <base-modal v-if="modal" @close-event="close">
      <template v-slot:default>
        <h1 class="text-4xl font-semibold">Are you sure?</h1>
        <p>You can't undo this action.</p>
      </template>
      <template v-slot:footer>
        <base-button @click="confirm" class="bg-red-500 text-gray-50">Delete</base-button>
      </template>
    </base-modal>
    <button @click="modal = true">modal</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const modal = ref(false);
    function close() {
      modal.value = false;
    }
    function confirm() {
      console.log("confirm");
      modal.value = false;
    }
    return { modal, close, confirm };
  },
};
</script>
