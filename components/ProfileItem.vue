<template>
  <div
    class="w-1/5 bg-backdrop-color px-7 py-10 rounded-lg flex flex-col justify-center shadow-lg dark:bg-dark-backdrop-color text-black dark:text-white"
  >
    <div
      class="img p-3 m-2 drop-shadow-xl bg-inner-color dark:bg-dark-inner-color rounded-3xl"
    >
      <img src="../assets/images/photo.png" class="rounded-full" alt="" />
    </div>
    <div class="flex flex-col justify-center text-center py-3">
      <h1 class="text-3xl font-bold">Kesya Wijaya</h1>
      <div class="status flex justify-center">
        <h2
          class="bg-[#f6f6f6] dark:bg-dark-inner-color inline px-3 py-1 rounded-lg mt-2 mb-1 drop-shadow-sm font-semibold"
        >
          Software Engineer
        </h2>
      </div>
    </div>
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
          <a href="mailto:aracellykesya@gmail.com" class="truncate"
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
    <div class="w-full flex mt-6 mb-2 px-5 justify-around items-center">
      <a href="https://github.com/karacelly"
        ><font-awesome-icon class="text-xl" icon="fa-brands fa-github"
      /></a>
      <a href="https://www.instagram.com/kesyaawijaya/"
        ><font-awesome-icon class="text-xl" icon="fa-brands fa-instagram"
      /></a>
      <a href="https://www.linkedin.com/in/kesyawijaya/"
        ><font-awesome-icon class="text-xl" icon="fa-brands fa-linkedin"
      /></a>
    </div>
  </div>
</template>
