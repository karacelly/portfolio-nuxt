<script setup lang="ts">
const route = useRoute();

definePageMeta({
  validate: async (route) => {
    return /^\d+$/.test(route.params.id[0]);
  },
});

const STORAGE_KEY = "repos";
const cachedData = localStorage.getItem(STORAGE_KEY);

const initialData = () => {
  if (cachedData) {
    JSON.parse(cachedData).forEach((element: Repository) => {
      if (element?.id == route.params.id) {
        return element;
      }
    });
  }
};

const { pending, data } = useLazyAsyncData("data", () =>
  initialData == null
    ? Promise.resolve(initialData)
    : $fetch("https://api.github.com/repositories/" + route.params.id).then(
        (repo: Repository) => {
          return repo;
        }
      )
);
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
    />
  </div>
</template>
