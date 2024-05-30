<script setup lang="ts">
import ServiceItem from "../components/ServiceItem.vue";
</script>

<template>
  <h1 class="text-xl md:text-3xl lg:text-3xl font-bold pb-2">About Me</h1>
  <div class="w-8 border-b-2 border-secondary-color" />

  <section class="content">
    <p class="text-md pt-4 text-justify">
      As a Computer Science graduate from Binus University, I am passionate
      about software engineering, especially in web and mobile development. I
      have solid skills in Java, Python, JavaScript, Laravel, and React, as well
      as experience with Android development using Java and Flutter.
    </p>
    <p class="text-md py-2">
      With two years as an Operation and System Development Staff and one year
      as an Application Developer, I have honed my time management,
      communication, and adaptability skills. My enthusiasm and technical
      expertise make me a valuable asset to any team seeking a dedicated and
      versatile software engineer.
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
import designImage from "../assets/images/design.png";
import developImage from "../assets/images/develop.png";
import backendImage from "../assets/images/backend.png";
import mobileImage from "../assets/images/mobile.png";

export default {
  data() {
    return {
      services: [
        {
          title: "Web Design",
          description: "Figma",
          image: designImage,
        },
        {
          title: "Frontend Development",
          description: "React, Vue",
          image: developImage,
        },
        {
          title: "Backend Development",
          description: "Javascript, Typecript, Java, Golang",
          image: backendImage,
        },
        {
          title: "Mobile Development",
          description: "React Native, Android Studio, Flutter",
          image: mobileImage,
        },
      ],
    };
  },
};
</script>
