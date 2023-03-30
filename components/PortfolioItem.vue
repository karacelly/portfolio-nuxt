<template>
  <div class="mt-5 mb-2">
    <div
      class="flex flex-col md:flex-row md:items-center justify-start md:justify-between gap-y-1"
    >
      <h1 class="text-3xl font-bold">
        {{
          name
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")
        }}
      </h1>
      <div class="flex gap-x-2">
        <a v-if="website" class="block" :href="website"
          ><PinkButton text="Visit URL"></PinkButton
        ></a>
        <a v-if="github" class="block" :href="github"
          ><PinkButton text="View Code"></PinkButton
        ></a>
      </div>
    </div>
    <p class="my-2 text-md w-full md:w-4/5">{{ description }}</p>
    <div
      v-if="renderedReadme != ''"
      class="bg-inner-color dark:bg-dark-inner-color rounded-lg my-5 w-full shadow-md"
    >
      <div
        class="prose dark:text-white p-6 mx-0 overflow-clip"
        v-html="renderedReadme"
      />
    </div>
  </div>
</template>

<script lang="ts">
import MarkdownIt from "markdown-it";
import { ref } from "vue";

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    created_at: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const { pending, data: readme } = useLazyAsyncData("readme", () =>
      $fetch(
        "https://raw.githubusercontent.com/karacelly/" +
          props.name +
          "/main/README.md"
      )
    );

    const md = new MarkdownIt();
    const renderedReadme = ref("");

    watch(readme, () => {
      renderedReadme.value = readme.value ? md.render(readme.value) : "";
    });

    return {
      pending,
      readme,
      renderedReadme,
    };
  },
});
</script>

<style>
.dark .prose h1,
.dark .prose h2,
.dark .prose h3,
.dark .prose h4 {
  color: white;
}

.prose h1 {
  margin: 0;
  font-size: 1.25rem; /* 20px */
  line-height: 1.75rem; /* 28px */
}

.prose h2 {
  margin-top: 0;
  font-size: 1.125rem; /* 18px */
  line-height: 1.75rem; /* 28px */
}

.prose h3 {
  margin-top: 0;
  font-size: 1rem; /* 16px */
  line-height: 1.5rem; /* 24px */
}

.prose p,
.prose h4 {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.prose a {
  color: var(--vt-c-red);
}
</style>
