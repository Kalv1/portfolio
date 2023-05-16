<template>
  <div class="container mx-auto relative text-white">
    <Navbar />
    <div class="my-80 flex justify-center px-16 lg:px-64">
      <div class="w-full flex justify-center gap-5 flex-col text-center">
        <h1 class="text-7xl">Calvin <span
            class="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#77009F] to-[#00C3FF] bg-[length:400%_400%] gradient">LAMBERT</span>
        </h1>
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
      <div class="bg-[#18181b] w-full p-8 border border-px border-gray-800 rounded-md cards overflow-hidden relative">
        <h2 class="text-xl font-bold">Front-end</h2>
        <p class="mt-3">I can build interfaces with VueJS and TailwindCSS. I also master different UI framework such as
          Ant Design and Buefy. I also have some experience with ReactJS!</p>
        <img class="h-32 absolute -bottom-5 -right-5 opacity-25" src="./assets/img/js.png" alt="js">
      </div>
      <div class="bg-[#18181b] w-full p-8 border border-px border-gray-800 rounded-md cards overflow-hidden relative">
        <h2 class="text-xl font-bold">Back-end</h2>
        <p class="mt-3">I have notions in back-end thanks to the studies I followed. I can build backend applications via Laravel and I also experiment on NestJS.</p>
        <img class="h-48 absolute -bottom-12 -right-10 opacity-25" src="./assets/img/php.png" alt="js">
      </div>
      <div class="bg-[#18181b] w-full p-8 border border-px border-gray-800 rounded-md cards overflow-hidden relative">
        <h2 class="text-xl font-bold">UI/UX Design</h2>
        <p class="mt-3">I also have skills in UI/UX design. I use software such as Lunacy / Figma and I have also in my past used software such as Illustrator and Photoshop.</p>
        <img class="h-32 absolute -bottom-5 -right-5 opacity-25" src="./assets/img/figma.svg" alt="js">
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
  
  gsap.fromTo(
    '.cards',
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1.5,
      ease: "power1.out",
      delay: 1,
      stagger: 0.2
    }
  )

})

</script>

<style scoped>
.gradient {
  -webkit-animation: gradient 7s ease infinite;
  -moz-animation: gradient 7s ease infinite;
  animation: gradient 7s ease infinite;
}


@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }

}

</style>
