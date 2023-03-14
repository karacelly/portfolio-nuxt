<script setup lang="ts">
useHead({
  titleTemplate: (pageTitle) => {
    return pageTitle ? `${pageTitle}` : "Kesya's Portfolio";
  },
});
</script>

<template>
  <main
    class="flex flex-col md:flex-row lg:flex-row justify-around w-full px-[5vw] pt-[5vw] pb-[20vw] md:py-[5vh] lg:py-[5vh] text-black dark:text-white gap-y-5 md:gap-x-5 lg:gap-x-5 items-center"
  >
    <ProfileItem
      class="w-full md:w-1/3 lg:w-1/4 md:h-[90vh] lg:h-[90vh]"
    ></ProfileItem>
    <div
      class="w-full md:h-[90vh] lg:h-[90vh] md:max-w-[70vw] lg:max-w-[70vw] relative bg-backdrop-color dark:bg-dark-backdrop-color rounded-xl text-black dark:text-white drop-shadow-lg md:overflow-scroll lg:overflow-scroll"
    >
      <NavbarItem
        class="hidden md:flex lg:flex md:sticky lg:sticky md:top-0 lg:top-0 z-10"
      ></NavbarItem>
      <div class="px-5 py-5 md:px-10 lg:px-10 md:pb-5 lg:pb-5">
        <slot />
      </div>
    </div>
    <NavbarItem
      class="fixed bottom-0 left-0 w-full md:hidden lg:hidden z-10"
    ></NavbarItem>
  </main>
</template>

<style>
::-webkit-scrollbar {
  display: none;
}
</style>
