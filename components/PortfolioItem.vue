<template>
  <div class="mt-5 mb-2">
    <h1 class="text-2xl font-bold">
      {{
        name
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      }}
    </h1>
    <p class="my-2 text-md">{{ description }}</p>
    <div
      v-if="renderedReadme != ''"
      class="bg-inner-color dark:bg-dark-inner-color rounded-lg my-5 w-3/4 shadow-md"
    >
      <div class="prose dark:text-white p-6 mx-0" v-html="renderedReadme" />
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
.dark .prose h2 {
  color: white;
  margin: 0;
}

.prose h1 {
  margin: 0;
}
</style>
