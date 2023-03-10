<script setup lang="ts">
useHead({
  titleTemplate: (pageTitle) => {
    return pageTitle ? `${pageTitle}` : "Kesya's Portfolio";
  },
});
</script>

<template>
  <main
    class="flex justify-around w-full px-[5vw] py-[5vh] text-black dark:text-white gap-x-5"
  >
    <ProfileItem class="w-1/3 h-[85vh]"></ProfileItem>
    <div
      class="w-full h-[85vh] max-w-[70vw] bg-backdrop-color dark:bg-dark-backdrop-color rounded-xl text-black dark:text-white drop-shadow-lg overflow-scroll"
    >
      <NavbarItem class="sticky top-0 z-10"></NavbarItem>
      <div class="px-10 pb-5">
        <slot />
      </div>
    </div>
  </main>
</template>

<style>
::-webkit-scrollbar {
  display: none;
}
</style>
