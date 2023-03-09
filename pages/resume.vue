<template>
  <h1 class="text-3xl font-bold pb-2">Resume</h1>
  <div class="w-8 border-b-2 border-secondary-color" />

  <div class="title flex pt-6 gap-3 items-center">
    <div
      class="icon p-2 rounded-md bg-[#f4f4f4] dark:bg-[#222222] drop-shadow-md"
    >
      <font-awesome-icon
        class="text-xl text-primary-color"
        icon="fa-solid fa-graduation-cap"
      />
    </div>
    <div class="section-title text-xl font-bold">Education</div>
  </div>
  <Timeline :value="education" class="py-6">
    <template #content="slotProps">
      <div class="pb-5">
        <h2 class="text-lg font-bold">
          {{ slotProps.item.instance }}
        </h2>
        <h2 class="text-md">
          {{ slotProps.item.title }}
        </h2>
        <p class="text-primary-color text-sm">
          {{ slotProps.item.date }}
        </p>
        <p class="text-md">
          {{ slotProps.item.desc }}
        </p>
      </div>
    </template>
  </Timeline>

  <div class="title flex gap-3 items-center">
    <div class="icon">
      <font-awesome-icon
        class="text-xl text-primary-color"
        icon="fa-solid fa-briefcase"
      />
    </div>
    <div class="section-title text-xl">Experience</div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      education: [
        {
          title: "S.Kom - Sarjana Komputer",
          instance: "Binus University",
          date: "2020 - 2024 (expected)",
          desc: "Current GPA: 3.89",
        },
        {
          title: "High School",
          instance: "Kolese Loyola",
          date: "2017 - 2020",
        },
      ],
      events2: ["2020", "2021", "2022", "2023"],
    };
  },
  methods: {},
};
</script>

<style>
.p-timeline-event-opposite {
  display: none;
}

.p-timeline .p-timeline-event-marker {
  background-color: var(--vt-c-pink);
  border: 1px solid white;
  width: 0.7rem;
  height: 0.7rem;
}
</style>
