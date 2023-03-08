<script lang="ts">
import { defineComponent } from "vue";
import LoadingPage from "./components/LoadingPage.vue";

export default defineComponent({
  mounted() {
    if (typeof document !== "undefined") {
      document
        .querySelector("body")
        ?.classList.add("bg-background-color", "dark:bg-dark-background-color");
    }
  },
});
</script>

<script setup lang="ts">
import { ref, onBeforeMount, onMounted } from "vue";

const loadingPage = ref();

onBeforeMount(() => {
  loadingPage.value = false;
});

onMounted(() => {
  setTimeout(() => {
    loadingPage.value = true;
  }, 1000);
});
</script>

<template>
  <LoadingPage v-show="!loadingPage" />

  <NuxtLayout v-if="loadingPage">
    <NuxtPage transition />
  </NuxtLayout>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
