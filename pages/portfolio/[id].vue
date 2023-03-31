<script setup lang="ts">
import { ref } from "vue";

const route = useRoute();

definePageMeta({
  validate: async (route) => {
    return /^\d+$/.test(route.params.id[0]);
  },
});

const CACHE_EXPIRATION_TIME = 60 * 60 * 1000; // 1 hour in milliseconds

const STORAGE_KEY = "repos";
const cachedData = localStorage.getItem(STORAGE_KEY);
const cachedTimestamp = localStorage.getItem(`${STORAGE_KEY}-timestamp`);
const isCacheValid =
  cachedTimestamp &&
  Date.now() - parseInt(cachedTimestamp, 10) < CACHE_EXPIRATION_TIME;

const initialData = (): Repository | null => {
  if (isCacheValid && cachedData) {
    JSON.parse(cachedData).forEach((element: Repository) => {
      if (element?.id == route.params.id) {
        return element;
      }
    });
  }
  return null;
};

const data = ref(initialData());

const { pending, data: repo } = useLazyAsyncData("data", () =>
  initialData == null
    ? (data.value = initialData)
    : $fetch("https://api.github.com/repositories/" + route.params.id).then(
        (r: Repository) => {
          data.value = r;
          return r;
        }
      )
);

console.log(data);
</script>

<template>
  <div>
    <h1 class="text-xl md:text-3xl lg:text-3xl font-bold pb-2">Portfolio</h1>
    <div class="w-8 border-b-2 border-secondary-color" />

    <PortfolioItem
      v-if="data"
      :id="data.id"
      :name="data.name"
      :description="data.description"
      :created_at="data.created_at"
      :github="data.html_url"
      :website="data.homepage"
    />
  </div>
</template>
