<template>
  <img class="absolute -left-[800px] -top-[750px]" src="./assets/img/Rectangle.png" />
  <div class="container mx-auto relative text-white px-5">
    <Navbar />
    <div class="my-16 md:my-72 flex justify-center px-8 md:px-16 lg:px-64">
      <div class="w-full flex justify-center gap-5 flex-col text-center">
        <h1 class="text-5xl md:text-7xl font-extrabold">Calvin <span
            class="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#77009F] to-[#00C3FF] bg-[length:400%_400%] block md:inline-block">LAMBERT</span>
        </h1>
        <p class="text-md md:text-2xl font-regular leading-relaxed">Hi! I am a 22 years old front-end developer mainly
          focused on
          VueJS & NuxtJS. I'm
          also interested in the world of 3D on the web and more specifically in THREEJS</p>
        <div class="flex justify-center items-center gap-4">
          <a href="https://github.com/Kalv1">
            <button class="links rounded-full bg-white p-2">
              <img class="w-6 h-6" src="./assets/img/github.png" alt="github">
            </button>
          </a>
          <a href="https://twitter.com/Calv1_">
            <button class="links rounded-full bg-white p-2">
              <img class="w-6 h-6" src="./assets/img/twitter.png" alt="github">
            </button>
          </a>
          <a href="mailto:calvin.lambert@protonmail.com">
            <button class="links rounded-full bg-white p-2">
              <img class="w-6 h-6" src="./assets/img/email.png" alt="github">
            </button>
          </a>
          <a href="https://www.linkedin.com/in/calvin-lambert/">
            <button class="links rounded-full bg-white p-2">
              <img class="w-6 h-6" src="./assets/img/linkedIn.png" alt="github">
            </button>
          </a>
        </div>
      </div>
    </div>
    <div id="skills" class="my-32 md:my-12 h-26 md:h-36 relative z-[-1]">
      <div
        class="absolute top-0 right-0 h-full w-[20px] sm:w-[50px] md:w-[100px] lg:w-[200px] bg-gradient-to-l from-[#161616] via-[#161616]/60 to-transparent z-[1]" />
      <div
        class="absolute top-0 right-left-0 h-full w-[20px] sm:w-[50px] md:w-[100px] lg:w-[200px] bg-gradient-to-l to-[#161616] via-[#161616]/60 from-transparent z-[1]" />
      <div class="w-full h-full overflow-hidden">
        <div class="flex w-[1800%]">
          <div class="flex items-center gap-40 slider pr-40">
            <img class="h-16 md:h-20" src="./assets/img/techno/vuejs.png" alt="vuejs">
            <img class="h-16 md:h-20" src="./assets/img/techno/nuxt.png" alt="nuxt">
            <img class="h-16 md:h-20" src="./assets/img/techno/pinia.svg" alt="pinia">
            <img class="h-16 md:h-20" src="./assets/img/techno/vuex.png" alt="vuex">
            <img class="h-16 md:h-20" src="./assets/img/techno/tailwind.png" alt="tailwind">
            <img class="h-16 md:h-20" src="./assets/img/techno/figma.svg" alt="figma">
            <img class="h-16 md:h-20" src="./assets/img/techno/git.png" alt="git">
            <img class="h-16 md:h-20" src="./assets/img/techno/laravel.svg" alt="laravel">
          </div>
          <div class="flex items-center gap-40 slider pr-40">
            <img class="h-16 md:h-20" src="./assets/img/techno/vuejs.png" alt="vuejs">
            <img class="h-16 md:h-20" src="./assets/img/techno/nuxt.png" alt="nuxt">
            <img class="h-16 md:h-20" src="./assets/img/techno/pinia.svg" alt="pinia">
            <img class="h-16 md:h-20" src="./assets/img/techno/vuex.png" alt="vuex">
            <img class="h-16 md:h-20" src="./assets/img/techno/tailwind.png" alt="tailwind">
            <img class="h-16 md:h-20" src="./assets/img/techno/figma.svg" alt="figma">
            <img class="h-16 md:h-20" src="./assets/img/techno/git.png" alt="git">
            <img class="h-16 md:h-20" src="./assets/img/techno/laravel.svg" alt="laravel">
          </div>
          <div class="flex items-center gap-40 slider pr-40">
            <img class="h-16 md:h-20" src="./assets/img/techno/vuejs.png" alt="vuejs">
            <img class="h-16 md:h-20" src="./assets/img/techno/nuxt.png" alt="nuxt">
            <img class="h-16 md:h-20" src="./assets/img/techno/pinia.svg" alt="pinia">
            <img class="h-16 md:h-20" src="./assets/img/techno/vuex.png" alt="vuex">
            <img class="h-16 md:h-20" src="./assets/img/techno/tailwind.png" alt="tailwind">
            <img class="h-16 md:h-20" src="./assets/img/techno/figma.svg" alt="figma">
            <img class="h-16 md:h-20" src="./assets/img/techno/git.png" alt="git">
            <img class="h-16 md:h-20" src="./assets/img/techno/laravel.svg" alt="laravel">
          </div>
        </div>
      </div>
    </div>
    <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <Card>
        <h2 class="text-lg md:text-xl font-bold">Front-end</h2>
        <p class="mt-3 text-sm md:text-base tracking-wide leading-relaxed">I can build interfaces with VueJS and
          TailwindCSS. I also master
          different UI framework such as
          Ant Design and Buefy. I also have some experience with ReactJS!</p>
        <img class="h-32 absolute -bottom-5 -right-5 opacity-25" src="./assets/img/js.png" alt="js">
      </Card>
      <Card>
        <h2 class="text-lg md:text-xl font-bold">Back-end</h2>
        <p class="mt-3 text-sm md:text-base tracking-wide leading-relaxed">I have notions in back-end thanks to the
          studies I followed. I can
          build backend applications via
          Laravel and I also experiment on NestJS.</p>
        <img class="h-48 absolute -bottom-12 -right-10 opacity-25" src="./assets/img/php.png" alt="js">
      </Card>
      <Card>
        <h2 class="text-lg md:text-xl font-bold">UI/UX Design</h2>
        <p class="mt-3 text-sm md:text-base tracking-wide leading-relaxed">I also have skills in UI/UX design. I use
          software such as Lunacy /
          Figma and I have also in my
          past used software such as Illustrator and Photoshop.</p>
        <img class="h-32 absolute -bottom-5 -right-5 opacity-25" src="./assets/img/figma.svg" alt="js">
      </Card>
    </div>
    <p class="text-3xl font-bold mt-16 md:mt-72 mb-5">Experiences<span>.</span></p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <Card>
        <div class="flex gap-5 items-center">
          <img class="h-10" src="./assets/img/company/apitech.png" alt="">
          <div class="flex flex-col gap-1">
            <p class="border-gray-800 text-sm tracking-widest">Mai 2022 to Jully 2023</p>
            <p class="border-gray-800 text-base md:text-lg font-bold">Intern fullstack developer</p>
          </div>
        </div>
        <p class="my-3 tracking-wide leading-relaxed text-sm md:text-base">
          Creation and integration of web pages<br>
          Maintenance of existing pages<br>
          Collaboration on a design system
        </p>
      </Card>
      <Card>
        <div class="flex gap-5 items-center">
          <img class="h-6" src="./assets/img/company/vinci.png" alt="">
          <div class="flex flex-col gap-1">
            <p class="border-gray-800 text-sm tracking-widest">Jully 2023 to Now</p>
            <p class="border-gray-800 text-base md:text-lg font-bold">Frontend developer</p>
          </div>
        </div>
        <p class="my-3 tracking-wide leading-relaxed text-sm md:text-base">
          Made UI/UX for internal tools<br>
          Creation and integration of web pages<br>
          Learning 3D & working with DevOps tools
        </p>
      </Card>
    </div>
  </div>
  <div class="h-[1px] bg-gray-800 mt-10" />
  <div class="py-6 md:py-10 container mx-auto bg-[#161616] text-white text-center text-sm md:text-base">
    <p>Made with ❤️ by Calvin.</p>
  </div>
</template>
<script setup>
import Navbar from './components/Navbar.vue'
import Card from './components/Card.vue'
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

.slider {
  -webkit-animation: slide 15s linear infinite;
  -moz-animation: slide 15s linear infinite;
  animation: slide 15s linear infinite;
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

@keyframes slide {
  to {
    transform: translateX(-100%);
  }
}
</style>
