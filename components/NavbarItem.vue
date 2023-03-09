<script setup lang="ts">
const color = useColorMode();

function toggleDark() {
  color.preference = color.value === "dark" ? "light" : "dark";
}
const themeColor = computed(() => {
  return color.value;
});
</script>

<template>
  <nav class="w-full flex justify-end">
    <div
      class="w-2/3 flex justify-around bg-inner-color dark:bg-dark-inner-color rounded-bl-lg rounded-tr-lg text-base font-light py-4"
    >
      <NuxtLink active-class="nuxt-link-active" class="hover:font-bold" to="/"
        >About</NuxtLink
      >
      <NuxtLink
        active-class="nuxt-link-active"
        class="hover:font-bold"
        to="/resume"
        >Resume</NuxtLink
      >
      <NuxtLink
        active-class="nuxt-link-active"
        class="hover:font-bold"
        to="/portfolio"
        >Portfolio</NuxtLink
      >
      <button
        @click="toggleDark"
        class="px-2 py-1 rounded-md hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black"
      >
        <font-awesome-icon
          v-if="themeColor === 'dark'"
          icon="fa-regular fa-sun"
        />
        <font-awesome-icon
          v-if="themeColor === 'light'"
          icon="fa-regular fa-moon"
        />
      </button>
    </div>
  </nav>
</template>

<style>
.nuxt-link-active {
  color: var(--vt-c-pink);
  font-weight: bold;
}
</style>
