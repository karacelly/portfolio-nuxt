<template>
  <div
    class="w-1/5 bg-backdrop-color rounded-lg flex flex-col justify-center shadow-lg dark:bg-dark-backdrop-color text-black dark:text-white"
  >
    <button
      @click="expand()"
      class="px-2 py-2 absolute top-0 right-0 md:hidden lg:hidden border-0 rounded-md drop-shadow-md bg-close-color dark:bg-dark-close-color flex justify-center items-center text-center z-20"
    >
      <span v-show="!active" class="text-secondary-color"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-down-short"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
          />
        </svg>
      </span>
      <span v-show="active" class="text-secondary-color"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-up-short"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
          />
        </svg>
      </span>
    </button>
    <div class="px-7 py-4 md:py-10 lg:py-10">
      <div
        class="flex flex-row md:justify-center md:items-center md:flex-col gap-x-5 md:gap-0"
      >
        <div
          class="w-1/3 md:w-2/3 lg:w-[8vw] lg:h-[8vw] img py-3 md:py-[3vh] px-3 md:m-2 lg:m-2 drop-shadow-xl bg-inner-color dark:bg-dark-inner-color rounded-3xl flex justify-center items-center"
        >
          <img src="../assets/images/photo.png" class="rounded-full" alt="" />
        </div>
        <div
          class="flex flex-col justify-start md:justify-center lg:justify-center text-center py-3"
        >
          <h1 class="text-2xl md:text-3xl lg:text-3xl font-semibold">
            Kesya Wijaya
          </h1>
          <div class="status flex justify-center">
            <h2
              class="bg-[#f6f6f6] dark:bg-dark-inner-color inline px-3 py-1 rounded-lg mt-2 mb-1 drop-shadow-sm font-medium md:font-semibold lg:font-semibold text-md"
            >
              Software Engineer
            </h2>
          </div>
        </div>
      </div>
      <Transition
        enter="transition ease duration-500 transform"
        enterFrom="opacity-0 translate-y-4"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease duration-300 transform"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-4"
      >
        <div v-show="active">
          <div
            class="flex flex-col pt-6 pb-5 border-y border-zinc-200 dark:border-zinc-600 mt-4"
          >
            <div class="contacts flex justify-between items-center">
              <div
                class="icon bg-[#f4f4f4] dark:bg-[#222222] drop-shadow-md px-3 py-2 shadow-white rounded-md"
              >
                <font-awesome-icon
                  class="text-primary-color"
                  icon="fa-regular fa-envelope"
                />
              </div>
              <div class="detail w-3/4 flex flex-col">
                <span class="text-gray-400 text-xs">Email</span>
                <a
                  target="_blank"
                  href="mailto:aracellykesya@gmail.com"
                  class="truncate"
                  >aracellykesya@gmail.com</a
                >
              </div>
            </div>
            <div class="contacts py-3 flex justify-between items-center">
              <div
                class="icon bg-[#f4f4f4] dark:bg-[#222222] drop-shadow-md px-3 py-2 shadow-black rounded-md"
              >
                <font-awesome-icon
                  class="text-primary-color"
                  icon="fa-brands fa-github"
                />
              </div>
              <div class="detail w-3/4">
                <span class="text-zinc-400 text-xs">Github</span>
                <p class="truncate">karacelly</p>
              </div>
            </div>
            <div class="contacts flex justify-between items-center">
              <div
                class="icon bg-[#f4f4f4] dark:bg-[#222222] drop-shadow-md px-3 py-2 shadow-black rounded-md"
              >
                <font-awesome-icon
                  class="text-primary-color"
                  icon="fa-regular fa-map"
                />
              </div>
              <div class="detail w-3/4">
                <span class="text-gray-400 text-xs">Location</span>
                <p class="truncate">Tangerang, Indonesia</p>
              </div>
            </div>
          </div>
          <div
            class="w-full flex mt-6 md:mb-2 lg:mb-2 px-5 justify-around items-center"
          >
            <a target="_blank" href="https://github.com/karacelly"
              ><font-awesome-icon class="text-xl" icon="fa-brands fa-github"
            /></a>
            <a target="_blank" href="https://www.instagram.com/kesyaawijaya/"
              ><font-awesome-icon class="text-xl" icon="fa-brands fa-instagram"
            /></a>
            <a target="_blank" href="https://www.linkedin.com/in/kesyawijaya/"
              ><font-awesome-icon class="text-xl" icon="fa-brands fa-linkedin"
            /></a>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  data() {
    return {
      active: false,
    };
  },
  methods: {
    expand() {
      this.active = !this.active;
      console.log(this.active);
    },
    handleResize() {
      const documentWidth = document.documentElement.clientWidth;

      if (documentWidth >= 768) {
        this.active = true;
      } else {
        this.active = false;
      }
    },
  },
};
</script>

<style>
.p-button {
  border: none;
}
</style>
