<template>
  <teleport to="#modal">
    <div
      class="fixed z-50 inset-0 overflow-y-auto text-gray-900 dark:text-gray-50"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <!-- Dark overlay -->
        <div
          @click="close"
          class="fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity"
          aria-hidden="true"
        ></div>
        <!-- This element is to trick the browser into centering the modal contents. -->
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >

        <div
          class="inline-block align-bottom bg-gray-100 dark:bg-gray-800 rounded-xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full"
        >
          <div class="grid grid-cols-1 p-4">
            <div class="justify-self-end flex items-center justify-center">
              <button
                @click="close"
                class="rounded-full dark:bg-gray-700 bg-gray-200 p-1"
              >
                <i
                  class="bi bi-x text-gray-500 text-2xl"
                ></i>
              </button>
            </div>
            <div class="mb-8">
              <slot />
            </div>
            <div class="justify-self-end flex items-center justify-center">
              <slot name="footer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  emits: ["closeEvent"],
  setup(props, { emit }) {
    function close() {
      emit("closeEvent");
    }
    return { close };
  },
};
</script>

<style lang="scss" scoped>
</style>