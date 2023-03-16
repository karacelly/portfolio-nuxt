<script setup lang="ts">
interface Repository {
  id: number;
  name: string;
  description: string;
  topics: string[];
  created_at: string;
}

const { pending, data } = useLazyAsyncData("data", () =>
  $fetch("https://api.github.com/users/karacelly/repos").then(
    (repos: Repository[]) => {
      const filteredRepos = repos.filter((repo) => {
        return (
          repo.topics?.length > 0 &&
          (repo.topics.includes("website") ||
            repo.topics.includes("mobile") ||
            repo.topics.includes("game"))
        );
      });
      return filteredRepos.sort((a, b) => {
        return (
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
      });
    }
  )
);
</script>

<template>
  <div>
    <h1 class="text-xl md:text-3xl lg:text-3xl font-bold pb-2">Portfolio</h1>
    <div class="w-8 border-b-2 border-secondary-color" />

    <div
      v-show="!pending"
      class="mt-6 mb-2 flex flex-col gap-y-3 md:grid md:grid-cols-3 md:gap-x-5 md:gap-y-4 md:mb-6"
    >
      <div
        v-for="repository in data"
        :key="repository.id"
        class="flex justify-center items-center max-w-sm p-6 bg-close-color border rounded-lg shadow dark:bg-dark-close-color dark:border-gray-700 drop-shadow-lg hover:animate-pulse hover:scale-105"
      >
        <a href="">
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
        </a>
      </div>
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

.animate-pulse {
  animation-name: pulse;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}
</style>
