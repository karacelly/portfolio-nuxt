<template>
  <button
    class="my-2 py-1 px-4 border-2 border-primary-color hover:bg-gradient-to-r from-secondary-color to-primary-color rounded-md font-semibold text-black dark:text-white hover:outline-none hover:border-transparent"
  >
    {{ text }}
  </button>
</template>

<script lang="ts">
export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
  },
});
</script>
