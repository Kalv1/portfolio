<template>
  <img class="absolute -left-[800px] -top-[750px]" src="./assets/img/Rectangle.png" />
  <div class="container mx-auto relative text-white px-5">
    <Navbar />
    <div class="my-16 md:my-72 flex justify-center px-8 md:px-16 lg:px-48">
      <div class="w-full flex justify-center gap-5 flex-col text-center">
        <h1 class="text-5xl md:text-7xl font-extrabold">Calvin <span
            class="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#77009F] to-[#00C3FF] bg-[length:400%_400%] block md:inline-block">LAMBERT</span>
        </h1>
        <p class="text-md md:text-2xl font-regular leading-relaxed tracking-wide">{{ $t('introduction') }}</p>
        <div class="flex justify-center items-center gap-4">
          <a href="https://github.com/Kalv1" class="links rounded-full bg-white p-2" target="_blank">
            <img class="w-6 h-6" src="./assets/img/github.png" alt="github">
          </a>
          <a href="mailto:calvin.lambert@protonmail.com" class="links rounded-full bg-white p-2" target="_blank">
            <img class="w-6 h-6" src="./assets/img/email.png" alt="mail">
          </a>
          <a href="https://www.linkedin.com/in/calvin-lambert/" class="links rounded-full bg-white p-2" target="_blank">
            <img class="w-6 h-6" src="./assets/img/linkedIn.png" alt="linkedin">
          </a>
        </div>
      </div>
    </div>
    <!-- Slider part -->
    <Slider/>

    <!-- Skills part -->
    <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <Card>
        <h2 class="text-lg md:text-xl font-bold">{{ $t('skill_card.front') }}</h2>
        <p class="mt-3 text-sm md:text-base tracking-wide leading-relaxed">{{ $t('skill_card.frontdesc') }}</p>
        <img class="h-32 absolute -bottom-5 -right-5 opacity-25" src="./assets/img/techno/nodejs.png" alt="js">
      </Card>
      <Card>
        <h2 class="text-lg md:text-xl font-bold">{{ $t('skill_card.back') }}</h2>
        <p class="mt-3 text-sm md:text-base tracking-wide leading-relaxed">{{ $t('skill_card.backdesc') }}</p>
        <img class="h-48 absolute -bottom-12 -right-10 opacity-25" src="./assets/img/techno/php.png" alt="js">
      </Card>
      <Card>
        <h2 class="text-lg md:text-xl font-bold">{{ $t('skill_card.uiux') }}</h2>
        <p class="mt-3 text-sm md:text-base tracking-wide leading-relaxed">{{ $t('skill_card.uidesc') }}</p>
        <img class="h-32 absolute -bottom-5 -right-5 opacity-25 grayscale" src="./assets/img/techno/figma.svg" alt="js">
      </Card>
    </div>
    <p id="experiences" class="text-3xl font-bold mt-16 md:mt-32 mb-5">{{ $t('experiences') }}</p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <Card>
        <Popper arrow :hover="true" content="Apitech Solution" placement="bottom">
          <div class="flex gap-5 items-center">
            <img class="h-10" src="./assets/img/company/apitech.png" alt="Apitech Logo">
            <div class="flex flex-col gap-1">
              <p class="border-gray-800 text-sm tracking-widest">{{ $t('apitech.date') }}</p>
              <p class="border-gray-800 text-base md:text-lg font-bold">{{ $t('apitech.job') }}</p>
            </div>
          </div>
        </Popper>
        <p class="my-5 tracking-wide leading-relaxed text-sm md:text-base">
          {{ $t('apitech.desc1') }}<br>
          {{ $t('apitech.desc2') }}<br>
          {{ $t('apitech.desc3') }}<br>
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
              <p class="border-gray-800 text-sm tracking-widest">{{ $t('axians.date') }}</p>
              <p class="border-gray-800 text-base md:text-lg font-bold">{{ $t('jobs') }}</p>
            </div>
          </div>
        </Popper>
        <p class="my-5 tracking-wide leading-relaxed text-sm md:text-base">
          {{ $t('axians.desc1') }}<br>
          {{ $t('axians.desc2') }}<br>
          {{ $t('axians.desc3') }}
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
    <p class="text-3xl font-bold mt-16 md:mt-32 mb-5">{{ $t('projects') }}</p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <Card>
        <div class="flex gap-5 items-center">
          <img class="h-14" src="./assets/img/envn.png" alt="ENVLogo">
          <div class="flex flex-col gap-1">
            <p class="border-gray-800 text-sm tracking-widest">{{ $t('envn') }}</p>
            <p class="border-gray-800 text-base md:text-lg font-bold">{{ $t('jobs') }}</p>
          </div>
        </div>
        <p class="my-5 tracking-wide leading-relaxed text-sm md:text-base">
          {{ $t('envn_desc') }}<br />
          {{ $t('envn_desc2') }}
        </p>
      </Card>
      <Card>
        <div class="flex gap-5 items-center">
          <img class="h-14" src="./assets/img/neptune.png" alt="NeptuneLogo">
          <div class="flex flex-col gap-1">
            <p class="border-gray-800 text-sm tracking-widest">{{ $t('neptune') }}</p>
            <p class="border-gray-800 text-base md:text-lg font-bold">{{ $t('jobs') }}</p>
          </div>
        </div>
        <p class="my-5 tracking-wide leading-relaxed text-sm md:text-base">
          {{ $t('neptune_desc') }}
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
import Slider from '@/components/Slider.vue'


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
