<script setup lang="ts">
import { ref } from "vue";
import { repositories } from "~~/data/repositories";

const route = useRoute();

definePageMeta({
  validate: async (route) => {
    return /^\d+$/.test(route.params.id[0]);
  },
});

const project =
  repositories.find((element: Repository) => element?.id == route.params.id) ||
  null;

let data = ref<Repository | null>(null);

if (project !== null) {
  data.value = project;
} else {
  const CACHE_EXPIRATION_TIME = 60 * 60 * 1000; // 1 hour in milliseconds
  const STORAGE_KEY = "repos";
  const cachedData = localStorage.getItem(STORAGE_KEY);
  const cachedTimestamp = localStorage.getItem(`${STORAGE_KEY}-timestamp`);
  const isCacheValid =
    cachedTimestamp &&
    Date.now() - parseInt(cachedTimestamp, 10) < CACHE_EXPIRATION_TIME;

  const initialData = (): Repository | null => {
    if (isCacheValid && cachedData) {
      return (
        JSON.parse(cachedData).find(
          (element: Repository) => element?.id == route.params.id
        ) || null
      );
    }
    return null;
  };

  data = ref(initialData());

  const { pending, data: repo } = useLazyAsyncData("data", () =>
    initialData == null
      ? (data.value = initialData)
      : $fetch<Repository>(
          "https://api.github.com/repositories/" + route.params.id
        ).then((r: Repository) => {
          data.value = r;
          return r;
        })
  );
}
</script>

<template>
  <div v-if="pending && !data">
    <div class="flex justify-center items-center h-[65vh] md:h-[70vh]">
      <img src="../../assets/images/spinner.svg" alt="" />
    </div>
  </div>
  <div v-else>
    <h1 class="text-xl md:text-3xl lg:text-3xl font-bold pb-2">Portfolio</h1>
    <div class="w-8 border-b-2 border-secondary-color" />

    <PortfolioItem
      :id="data?.id"
      :name="data?.name"
      :description="data?.description"
      :created_at="data?.created_at"
      :github="data?.html_url"
      :website="data?.homepage"
    />
  </div>
</template>
