<template>
  <div class="container mx-auto relative text-white">
    <Navbar />
    <div class="my-80 flex justify-center px-16 lg:px-64">
      <div class="w-full flex justify-center gap-5 flex-col text-center">
        <h1 class="text-7xl">Calvin <span class="font-bold">LAMBERT.</span></h1>
        <p class="text-2xl font-regular leading-relaxed">Hi! I am a 22 years old front-end developer mainly
          focused on
          VueJS & NuxtJS. I'm
          also interested in the world of 3D on the web and more specifically in THREEJS</p>
        <div class="flex justify-center items-center gap-4">
          <button class="links rounded-full bg-white p-2">
            <img class="w-6 h-6" src="./assets/img/github.png" alt="github">
          </button>
          <button class="links rounded-full bg-white p-2">
            <img class="w-6 h-6" src="./assets/img/twitter.png" alt="github">
          </button>
          <button class="links rounded-full bg-white p-2">
            <img class="w-6 h-6" src="./assets/img/email.png" alt="github">
          </button>
        </div>
      </div>
    </div>
    <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
      <div class="bg-[#18181b] w-full p-8 border border-px border-gray-800 rounded-md">
        <h2 class="text-xl font-bold">Front-end</h2>
        <p class="mt-3">I can build interfaces with VueJS and TailwindCSS. I also master different UI framework such as Ant Design and Buefy. I also have some experience with ReactJS!</p>
      </div>
      <div class="bg-[#18181b] w-full p-8 border border-px border-gray-800 rounded-md">
        <h2 class="text-xl font-bold">Back-end</h2>
        <p class="mt-3">I can build interfaces with VueJS and TailwindCSS. I also master different UI framework such as Ant Design and Buefy. I also have some experience with ReactJS!</p>
      </div>
      <div class="bg-[#18181b] w-full p-8 border border-px border-gray-800 rounded-md">
        <h2 class="text-xl font-bold">UI/UX Design</h2>
        <p class="mt-3">I can build interfaces with VueJS and TailwindCSS. I also master different UI framework such as Ant Design and Buefy. I also have some experience with ReactJS!</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import Navbar from './components/Navbar.vue'
import { onMounted } from 'vue';
import gsap from 'gsap'

onMounted(() => {

  gsap.fromTo(
    '.links',
    {
      x: "-80%",
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power1.out",
      delay: 1,
      stagger: 0.2
    }
  )

})

</script>

