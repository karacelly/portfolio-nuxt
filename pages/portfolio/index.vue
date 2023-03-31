<script setup lang="ts">
const STORAGE_KEY = "repos";
const CACHE_EXPIRATION_TIME = 60 * 60 * 1000; // 1 hour in milliseconds

const cachedData = localStorage.getItem(STORAGE_KEY);
const initialData = cachedData ? JSON.parse(cachedData) : null;
const cachedTimestamp = localStorage.getItem(`${STORAGE_KEY}-timestamp`);
const isCacheValid =
  cachedTimestamp &&
  Date.now() - parseInt(cachedTimestamp, 10) < CACHE_EXPIRATION_TIME;

const { pending, data } = useLazyAsyncData("data", () =>
  isCacheValid && initialData
    ? Promise.resolve(initialData)
    : $fetch("https://api.github.com/users/karacelly/repos").then(
        (repos: Repository[]) => {
          const filteredRepos = repos.filter((repo) => {
            return (
              repo.topics?.length > 0 &&
              (repo.topics.includes("website") ||
                repo.topics.includes("mobile") ||
                repo.topics.includes("game"))
            );
          });
          const sortedRepos = filteredRepos.sort((a, b) => {
            return (
              new Date(b.created_at).getTime() -
              new Date(a.created_at).getTime()
            );
          });
          localStorage.setItem(STORAGE_KEY, JSON.stringify(sortedRepos));
          localStorage.setItem(
            `${STORAGE_KEY}-timestamp`,
            Date.now().toString()
          );
          return sortedRepos;
        }
      )
);
</script>

<template>
  <div>
    <h1 class="text-xl md:text-3xl lg:text-3xl font-bold pb-2">Portfolio</h1>
    <div class="w-8 border-b-2 border-secondary-color" />

    <div
      v-if="pending && !data"
      class="mt-6 mb-2 flex-col gap-y-5 md:grid md:grid-cols-3 md:gap-x-5 md:gap-y-4 md:mb-6"
    >
      <div
        v-for="i in 9"
        class="animate-blink h-[20vh] rounded-md mt-2 md:mt-0"
      ></div>
    </div>
    <div
      v-else
      class="mt-6 mb-2 flex flex-col gap-y-3 md:grid md:grid-cols-3 md:gap-x-5 md:gap-y-4 md:mb-6"
    >
      <NuxtLink
        v-for="repository in data"
        :key="repository.id"
        :to="`/portfolio/${repository.id}`"
        class="flex flex-col justify-center items-center p-6 bg-close-color border rounded-lg shadow animate-pulse md:animate-none md:border-gray-100 dark:bg-dark-close-color md:dark:border-gray-700 drop-shadow-lg md:hover:animate-pulse md:hover:scale-105"
      >
        <div>
          <h5
            class="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white text-center md:text-xl"
          >
            {{
              repository.name
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")
            }}
          </h5>
          <p
            class="font-normal text-xs text-center text-gray-700 dark:text-gray-400 md:text-sm line-clamp-3"
          >
            {{ repository.description }}
          </p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style>
@keyframes pulse {
  0% {
    border-color: #ff6060;
  }
  50% {
    border-color: var(--vt-c-pink);
  }
  100% {
    border-color: #ff6060;
  }
}

@media (max-width: 768px) {
  .animate-pulse {
    animation-name: pulse;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }
}
</style>
