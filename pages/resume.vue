<template>
  <h1 class="text-3xl font-bold pb-2">Resume</h1>
  <div class="w-8 border-b-2 border-secondary-color" />

  <div class="my-6">
    <button
      @click="downloadPDF()"
      class="py-2 px-4 bg-gradient-to-r from-secondary-color to-primary-color rounded-md text-white font-semibold hover:text-black hover:font-bold"
    >
      Download My Resume >>
    </button>
  </div>

  <div class="title flex mt-4 gap-3 items-center">
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
  <div class="px-2">
    <Timeline :value="education" class="py-6">
      <template #content="slotProps">
        <div class="pb-5 flex justify-between">
          <div class="left">
            <h2 class="text-lg font-bold">
              {{ slotProps.item.instance }}
            </h2>
            <h2 class="text-md text-primary-color">
              {{ slotProps.item.title }}
            </h2>
            <p class="text-md">
              {{ slotProps.item.desc }}
            </p>
          </div>
          <p class="text-sm">
            {{ slotProps.item.date }}
          </p>
        </div>
      </template>
    </Timeline>
  </div>

  <div class="title flex gap-3 items-center">
    <div
      class="icon p-2 rounded-md bg-[#f4f4f4] dark:bg-[#222222] drop-shadow-md"
    >
      <font-awesome-icon
        class="text-xl text-primary-color"
        icon="fa-solid fa-briefcase"
      />
    </div>
    <div class="section-title text-xl font-bold">Experience</div>
  </div>
  <div class="px-2">
    <Timeline :value="experience" class="py-6">
      <template #content="slotProps">
        <div class="pb-5 flex justify-between gap-x-3">
          <div class="left w-[80%]">
            <h2 class="text-lg font-bold">
              {{ slotProps.item.position }}
            </h2>
            <h2 class="text-primary-color text-md">
              {{ slotProps.item.company }}
            </h2>
            <p class="text-md">
              {{ slotProps.item.desc }}
            </p>
          </div>
          <div class="right text-right">
            <p class="text-sm">
              {{ slotProps.item.date }}
            </p>
            <p class="text-sm italic">
              {{ slotProps.item.category }}
            </p>
          </div>
        </div>
      </template>
    </Timeline>
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
      experience: [
        {
          position: "Application Developer",
          company: "Binus University",
          date: "Feb 2023 - Present",
          category: "Internship",
        },
        {
          position: "Operations and System Development Staff",
          company: "Binus University",
          date: "Aug 2022 - Present",
          desc: "Providing technical support in network, system and infrastructure for activities that were held in or by Software Laboratory. Installation and maintenance of servers and workstations. Hardware upgrade for servers and workstations.",
          category: "Full-time",
        },
        {
          position: "Laboratory Assistant",
          company: "Binus University",
          date: "Sept 2021 - Present",
          desc: "Tutor and marker for  Operating System (COMP6153001), Object Oriented Analysis & Design (COMP6115001), Framework Layer Architecture (COMP6122001), Data Structures (COMP6048001), Human & Computer Interaction (COMP6800001), Computer Vision (COMP7116001), and Scientifc Computing (MATH6183001).",
          category: "Full-time",
        },
        {
          position: "Laboratory Assistant",
          company: "Binus University",
          date: "Feb 2021 - Aug 2021",
          desc: "Tutor and marker for Multimedia Programming Foundation (COMP7094), Database (ISYS6084).",
          category: "Part-time",
        },
        {
          position: "Scholarship Mentor",
          company: "Binus Student Learning Community",
          date: "Oct 2021 - Jan 2023",
          desc: "Received 16 credits scholarship every semester for three semester in a row. Guide students whose achievements have not reached the standard in Program Design Methods (COMP6056) and Human & Computer Interaction (COMP6800001).",
        },
      ],
    };
  },
  methods: {
    downloadPDF() {
      const filePath = "/pdf/CV.pdf";
      const link = document.createElement("a");
      link.href = filePath;
      link.download = "CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
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

.dark .p-timeline .p-timeline-event-marker {
  border: 1px solid rgb(53, 53, 53);
}

.dark .p-timeline-event-connector {
  background-color: rgb(53, 53, 53);
}
</style>
