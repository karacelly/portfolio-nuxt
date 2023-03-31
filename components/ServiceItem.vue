<script setup>
const props = defineProps({
  service: Object,
});
</script>

<template>
  <li
    class="relative p-3 rounded-md box-shadow shadow-md bg-inner-color dark:bg-dark-inner-color flex items-center flex-col md:flex-row justify-center md:justify-start gap-x-4"
  >
    <div class="service-icon-box">
      <!-- <img :src="service.image" alt="icon" class="w-40" /> -->
      <img src="~/assets/images/design.png" alt="icon" class="w-20" />
    </div>

    <div class="service-content-box">
      <h4 class="font-semibold text-md md:text-lg text-center md:text-justify">
        {{ service.title }}
      </h4>

      <p
        class="service-item-text text-center text-sm md:text-justify md:text-md"
      >
        {{ service.description }}
      </p>
    </div>
  </li>
</template>
