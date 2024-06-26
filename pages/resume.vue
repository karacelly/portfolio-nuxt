<template>
  <h1 class="text-xl md:text-3xl lg:text-3xl  font-bold pb-2">Resume</h1>
  <div class="w-8 border-b-2 border-secondary-color" />

  <div class="my-6">
    <PinkButton @click="downloadPDF()" text="Download My Resume >>" ></PinkButton>
  </div>

  <div class="title flex mt-6 gap-3 items-center">
    <div
      class="icon p-2 rounded-md bg-close-color dark:bg-dark-close-color drop-shadow-md"
    >
      <font-awesome-icon
        class="text-xl text-primary-color"
        icon="fa-solid fa-graduation-cap"
      />
    </div>
    <div class="section-title text-lg font-bold">Education</div>
  </div>
  <div class="px-2">
    <Timeline :value="education" class="py-6">
      <template #opposite="slotProps">
        <p class="text-xs">
          {{ slotProps.item.date }}
        </p>
      </template>
      <template #content="slotProps">
        <div class="pb-5 flex justify-between">
          <div class="left">
            <h2 class="text-md font-bold">
              {{ slotProps.item.instance }}
            </h2>
            <h2 class="text-sm text-primary-color">
              {{ slotProps.item.title }}
            </h2>
            <p class="text-sm">
              {{ slotProps.item.desc }}
            </p>
          </div>
        </div>
      </template>
    </Timeline>
  </div>

  <div class="title flex gap-3 items-center">
    <div
      class="icon p-2 rounded-md bg-close-color dark:bg-dark-close-color drop-shadow-md"
    >
      <font-awesome-icon
        class="text-xl text-primary-color"
        icon="fa-solid fa-briefcase"
      />
    </div>
    <div class="section-title text-lg font-bold">Experience</div>
  </div>
  <div class="px-2">
    <Timeline :value="experience" class="py-6">
      <template #opposite="slotProps">
        <p class="text-xs">
          <p class="text-xs">
              {{ slotProps.item.date }}
            </p>
            <p class="text-xs italic">
              {{ slotProps.item.category }}
            </p>
        </p>
      </template>
      <template #content="slotProps">
        <div class="pb-5 flex justify-between gap-x-3">
          <div class="left w-[80%]">
            <h2 class="text-md font-bold">
              {{ slotProps.item.position }}
            </h2>
            <h2 class="text-primary-color text-sm">
              {{ slotProps.item.company }}
            </h2>
            <p class="text-sm">
              {{ slotProps.item.desc }}
            </p>
          </div>
        </div>
      </template>
    </Timeline>
  </div>

  <div class="section-title text-lg font-bold">Certificates & Achievements</div>
  <div class="mt-4 mb-6">
    <Card
      v-if="!showModal"
      class="bg-close-color dark:bg-dark-close-color dark:text-white px-4"
    >
      <template #content>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div v-for="(image, index) in images" :key="index" class="hover:scale-105">
            <img
              class="w-full h-auto cursor-pointer"
              :src="image"
              @click="openModal(index)"
            />
            <button
              class="hidden md:block lg:block bg-primary-color hover:bg-secondary-color text-white font-bold py-2 px-4 rounded-full mt-2"
              @click="openModal(index)"
            >
              View
            </button>
          </div>
        </div>
      </template>
    </Card>
    <div
      class="w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50"
      v-if="showModal"
    >
      <Card class="bg-close-color dark:bg-dark-close-color dark:text-white">
        <template #content>
          <img :src="images[currentIndex]" class="w-full h-auto" />
          <button
            class="bg-primary-color hover:bg-secondary-color text-white font-bold py-2 px-4 rounded-full mt-2"
            @click="closeModal"
          >
            Close
          </button>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      education: [
        {
          title: "S.Kom - Sarjana Komputer",
          instance: "Binus University",
          date: "2020 - 2024",
          desc: "Current GPA: 3.93",
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
          date: "Feb 2023 - Feb 2024",
          category: "Internship",
        },
        {
          position: "Tokopedia Devcamp Class of 2022",
          company: "Tokopedia",
          date: "Oct 2022",
          desc: "Selected as one of participants to join 7-day exclusive bootcamp training to learn how to use technology especially in Backend curriculum, such as Golang, Database, Caching, and Message Queueing. Experience and get a closer look at the Tokopedia Tech team, be mentored directly by Tokopedia’s tech and product leaders in building impactful products through the virtual hackathons, and extend network to fellow tech enthusiasts.",
        },
        {
          position: "Operations and System Development Staff",
          company: "Binus University",
          date: "Aug 2022 - Feb 2024",
          desc: "Providing technical support in network, system and infrastructure for activities that were held in or by Software Laboratory. Installation and maintenance of servers and workstations. Hardware upgrade for servers and workstations.",
          category: "Full-time",
        },
        {
          position: "Laboratory Assistant",
          company: "Binus University",
          date: "Sept 2021 - Feb 2024",
          desc: "Tutor and marker for  Operating System (COMP6153001), Object Oriented Analysis & Design (COMP6115001), Framework Layer Architecture (COMP6122001), Data Structures (COMP6048001), Human & Computer Interaction (COMP6800001), Computer Vision (COMP7116001), and Scientifc Computing (MATH6183001).",
          category: "Full-time",
        },
        {
          position: "Scholarship Mentor",
          company: "Binus Student Learning Community",
          date: "Oct 2021 - Jan 2023",
          desc: "Received 16 credits scholarship every semester for three semester in a row. Guide students whose achievements have not reached the standard in Program Design Methods (COMP6056) and Human & Computer Interaction (COMP6800001).",
        },
        {
          position: "Laboratory Assistant",
          company: "Binus University",
          date: "Feb 2021 - Aug 2021",
          desc: "Tutor and marker for Multimedia Programming Foundation (COMP7094), Database (ISYS6084).",
          category: "Part-time",
        },
      ],
      images: [
        "/certificates/Devcamp.jpg",
        "/certificates/RevoU.jpg",
        "/certificates/MentorEven2122.jpg",
        "/certificates/MentorOdd2122.jpg",
      ],
      showModal: false,
      currentIndex: 0,
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
    openModal(index) {
      this.showModal = true;
      this.currentIndex = index;
      console.log(this.showModal);
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style>
.p-timeline .p-timeline-event-opposite {
  width: 100px;
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
