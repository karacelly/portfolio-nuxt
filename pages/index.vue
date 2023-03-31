<script setup lang="ts">
import ServiceItem from "../components/ServiceItem.vue";
</script>

<template>
  <h1 class="text-xl md:text-3xl lg:text-3xl font-bold pb-2">About Me</h1>
  <div class="w-8 border-b-2 border-secondary-color" />

  <section class="content">
    <p class="text-md pt-4 text-justify">
      As a junior studying Computer Science at Binus University, I am driven by
      a passion for software engineering, especially web and mobile development.
      I am constantly looking for new challenges to tackle and opportunities to
      learn, whether through coursework or personal projects. My skills and
      knowledge in programming languages such as Java, Python, and JavaScript,
      as well as frameworks like Laravel or other React-based frameworks, have
      helped me develop a strong foundation in web development. In addition, I
      have experience developing mobile applications for Android devices using
      Java and Flutter.
    </p>
    <p class="text-md py-2">
      Despite my busy schedule, I am always eager to take on new challenges and
      expand my skill set. Currently, I am working on my final thesis while also
      juggling a full-time job as an Operation and System Development Staff, and
      an internship as an App Developer. Through these experiences, I have
      developed strong time management and communication skills, as well as an
      ability to quickly adapt to new environments and projects. I am confident
      that my enthusiasm and determination, coupled with my technical expertise,
      make me a valuable asset to any team looking for a dedicated and versatile
      software engineer.
    </p>
  </section>

  <section class="deed my-3">
    <div class="section-title text-xl font-bold">What I'm Doing</div>

    <div class="mt-4 grid grid-cols-2 gap-4">
      <ServiceItem
        class="list-none"
        v-for="service in services"
        :service="service"
      ></ServiceItem>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  data() {
    return {
      services: [
        {
          title: "Web Design",
          description: "Figma",
          image: "~/assets/images/design.png",
        },
        {
          title: "Web Development",
          description: "NextJS, NuxtJS, Laravel",
          image: "~/assets/images/develop.png",
        },
        {
          title: "Mobile App Development",
          description: "Android Studio with Java",
          image: "~/assets/images/mobile.png",
        },
      ],
    };
  },
};
</script>
