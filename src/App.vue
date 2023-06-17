<template>
  <img class="absolute -left-[800px] -top-[750px]" src="./assets/img/Rectangle.png" />
  <div class="container mx-auto relative text-white px-5">
    <Navbar />
    <div class="my-16 md:my-72 flex justify-center px-8 md:px-16 lg:px-48">
      <div class="w-full flex justify-center gap-5 flex-col text-center">
        <h1 class="text-5xl md:text-7xl font-extrabold">Calvin <span
            class="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#77009F] to-[#00C3FF] bg-[length:400%_400%] block md:inline-block">LAMBERT</span>
        </h1>
        <p class="text-md md:text-2xl font-regular leading-relaxed tracking-wide">Hi! I am a 22 years old front-end
          developer mainly
          focused on
          VueJS & NuxtJS. I'm
          also interested in the world of 3D on the web and more specifically in THREEJS</p>
        <div class="flex justify-center items-center gap-4">
          <a href="https://github.com/Kalv1" class="links rounded-full bg-white p-2" target="_blank">
            <img class="w-6 h-6" src="./assets/img/github.png" alt="github">
          </a>
          <a href="https://twitter.com/Calv1_" class="links rounded-full bg-white p-2" target="_blank">
            <img class="w-6 h-6" src="./assets/img/twitter.png" alt="github">
          </a>
          <a href="mailto:calvin.lambert@protonmail.com" class="links rounded-full bg-white p-2" target="_blank">
            <img class="w-6 h-6" src="./assets/img/email.png" alt="github">
          </a>
          <a href="https://www.linkedin.com/in/calvin-lambert/" class="links rounded-full bg-white p-2" target="_blank">
            <img class="w-6 h-6" src="./assets/img/linkedIn.png" alt="github">
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
            <img class="h-16 md:h-20" src="./assets/img/techno/js.png" alt="js">
            <img class="h-16 md:h-20" src="./assets/img/techno/vuejs.png" alt="vuejs">
            <img class="h-16 md:h-20" src="./assets/img/techno/nuxt.png" alt="nuxt">
            <img class="h-16 md:h-20" src="./assets/img/techno/pinia.svg" alt="pinia">
            <img class="h-16 md:h-20" src="./assets/img/techno/vuex.png" alt="vuex">
            <img class="h-16 md:h-20" src="./assets/img/techno/tailwind.png" alt="tailwind">
            <img class="h-16 md:h-20" src="./assets/img/techno/laravel.png" alt="laravel">
            <img class="h-16 md:h-20" src="./assets/img/techno/figma.svg" alt="figma">
            <img class="h-16 md:h-20" src="./assets/img/techno/git.png" alt="git">
          </div>
          <div class="flex items-center gap-40 slider pr-40">
            <img class="h-16 md:h-20" src="./assets/img/techno/js.png" alt="js">
            <img class="h-16 md:h-20" src="./assets/img/techno/vuejs.png" alt="vuejs">
            <img class="h-16 md:h-20" src="./assets/img/techno/nuxt.png" alt="nuxt">
            <img class="h-16 md:h-20" src="./assets/img/techno/pinia.svg" alt="pinia">
            <img class="h-16 md:h-20" src="./assets/img/techno/vuex.png" alt="vuex">
            <img class="h-16 md:h-20" src="./assets/img/techno/tailwind.png" alt="tailwind">
            <img class="h-16 md:h-20" src="./assets/img/techno/laravel.png" alt="laravel">
            <img class="h-16 md:h-20" src="./assets/img/techno/figma.svg" alt="figma">
            <img class="h-16 md:h-20" src="./assets/img/techno/git.png" alt="git">
          </div>
          <div class="flex items-center gap-40 slider pr-40">
            <img class="h-16 md:h-20" src="./assets/img/techno/js.png" alt="js">
            <img class="h-16 md:h-20" src="./assets/img/techno/vuejs.png" alt="vuejs">
            <img class="h-16 md:h-20" src="./assets/img/techno/nuxt.png" alt="nuxt">
            <img class="h-16 md:h-20" src="./assets/img/techno/pinia.svg" alt="pinia">
            <img class="h-16 md:h-20" src="./assets/img/techno/vuex.png" alt="vuex">
            <img class="h-16 md:h-20" src="./assets/img/techno/tailwind.png" alt="tailwind">
            <img class="h-16 md:h-20" src="./assets/img/techno/laravel.png" alt="laravel">
            <img class="h-16 md:h-20" src="./assets/img/techno/figma.svg" alt="figma">
            <img class="h-16 md:h-20" src="./assets/img/techno/git.png" alt="git">
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
        <img class="h-32 absolute -bottom-5 -right-5 opacity-25" src="./assets/img/techno/nodejs.png" alt="js">
      </Card>
      <Card>
        <h2 class="text-lg md:text-xl font-bold">Back-end</h2>
        <p class="mt-3 text-sm md:text-base tracking-wide leading-relaxed">I have notions in back-end thanks to the
          studies I followed. I can
          build backend applications via
          Laravel and I also experiment on NestJS.</p>
        <img class="h-48 absolute -bottom-12 -right-10 opacity-25" src="./assets/img/techno/php.png" alt="js">
      </Card>
      <Card>
        <h2 class="text-lg md:text-xl font-bold">UI/UX Design</h2>
        <p class="mt-3 text-sm md:text-base tracking-wide leading-relaxed">I also have skills in UI/UX design. I use
          software such as Lunacy /
          Figma and I have also in my
          past used software such as Illustrator and Photoshop.</p>
        <img class="h-32 absolute -bottom-5 -right-5 opacity-25 grayscale" src="./assets/img/techno/figma.svg" alt="js">
      </Card>
    </div>
    <p id="experiences" class="text-3xl font-bold mt-16 md:mt-32 mb-5">Experiences</p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <Card>
        <Popper arrow :hover="true" content="Apitech Solution" placement="bottom">
          <div class="flex gap-5 items-center">
            <img class="h-10" src="./assets/img/company/apitech.png" alt="Apitech Logo">
            <div class="flex flex-col gap-1">
              <p class="border-gray-800 text-sm tracking-widest">Mai 2022 to Jully 2023</p>
              <p class="border-gray-800 text-base md:text-lg font-bold">Intern fullstack developer</p>
            </div>
          </div>
        </Popper>
        <p class="my-5 tracking-wide leading-relaxed text-sm md:text-base">
          Creation and integration of web pages<br>
          Maintenance of existing pages<br>
          Collaboration on a design system
        </p>
        <hr class="mb-3 border-gray-800 group-hover:border-gray-400 transition-all duration-200 ease-in">
        <div class="flex items-center justify-end gap-3">
          <img class="h-5 transition-all duration-500 group-hover:grayscale-0 grayscale" src="./assets/img/techno/js.png"
            alt="">
          <img class="h-5 transition-all duration-500 group-hover:grayscale-0 grayscale"
            src="./assets/img/techno/nuxt.png" alt="">
          <img class="h-5 transition-all duration-500 group-hover:grayscale-0 grayscale"
            src="./assets/img/techno/tailwind.png" alt="">
          <img class="h-5 transition-all duration-500 group-hover:grayscale-0 grayscale" src="./assets/img/techno/git.png"
            alt="">
          <img class="h-5 transition-all duration-500 group-hover:grayscale-0 grayscale"
            src="./assets/img/techno/figma.svg" alt="">
          <img class="h-5 transition-all duration-500 group-hover:grayscale-0 grayscale"
            src="./assets/img/techno/vuex.png" alt="">
        </div>
      </Card>
      <Card>
        <Popper arrow :hover="true" content="Axians C&S | Vinci Energies" placement="bottom">
          <div class="flex gap-5 items-center">
            <img class="h-6" src="./assets/img/company/vinci.png" alt="Vinci logo">
            <div class="flex flex-col gap-1">
              <p class="border-gray-800 text-sm tracking-widest">Jully 2023 to Now</p>
              <p class="border-gray-800 text-base md:text-lg font-bold">Frontend developer</p>
            </div>
          </div>
        </Popper>
        <p class="my-5 tracking-wide leading-relaxed text-sm md:text-base">
          Made UI/UX for internal tools<br>
          Creation and integration of web pages<br>
          Learning 3D & working with DevOps tools
        </p>
        <hr class="mb-3 border-gray-800 group-hover:border-gray-400 transition-all duration-200 ease-in">
        <div class="flex items-center justify-end gap-3">
          <img class="h-5 transition-all duration-500 group-hover:grayscale-0 grayscale" src="./assets/img/techno/js.png"
            alt="">
          <img class="h-5 transition-all duration-500 group-hover:grayscale-0 grayscale"
            src="./assets/img/techno/nuxt.png" alt="">
          <img class="h-5 transition-all duration-500 group-hover:grayscale-0 grayscale"
            src="./assets/img/techno/tailwind.png" alt="">
          <img class="h-5 transition-all duration-500 group-hover:grayscale-0 grayscale" src="./assets/img/techno/git.png"
            alt="">
          <img class="h-5 transition-all duration-500 group-hover:grayscale-0 grayscale"
            src="./assets/img/techno/pinia.svg" alt="">

        </div>
      </Card>
    </div>
    <p class="text-3xl font-bold mt-16 md:mt-32 mb-5">Projects</p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <Card>
        <div class="flex gap-5 items-center">
          <img class="h-14" src="./assets/img/envn.png" alt="ENVLogo">
          <div class="flex flex-col gap-1">
            <p class="border-gray-800 text-sm tracking-widest">Nantes Veterinary School</p>
            <p class="border-gray-800 text-base md:text-lg font-bold">Frontend developer</p>
          </div>
        </div>
        <p class="my-5 tracking-wide leading-relaxed text-sm md:text-base">
          Creation of a veterinary products store for the school's in-house associations. <br />
          The site enables orders to be placed online, and the cooperative team to prepare orders and keep track of
          purchase orders.
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
import Navbar from '@/components/Navbar.vue'
import Card from '@/components/Card.vue'
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
