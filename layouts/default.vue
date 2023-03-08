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
    <ProfileItem class="w-1/3"></ProfileItem>
    <div
      class="w-full bg-backdrop-color dark:bg-dark-backdrop-color rounded-xl text-black dark:text-white drop-shadow-lg"
    >
      <NavbarItem></NavbarItem>
      <slot />
    </div>
  </main>
</template>
