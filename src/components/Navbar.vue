<template>
    <div class="w-full text-white justify-between items-center text-lg mt-14 hidden md:flex">
        <div class="w-1/5"></div>
        <div class="flex gap-20 w-3/5 justify-center">
            <a href="#skills" class="relative group p-2 flex justify-center delay-200">
                <p>{{ $t('skills') }}</p>
                <div
                    class="w-full scale-x-0 group-hover:scale-x-100 h-px absolute bottom-0 transition ease-in bg-gradient-to-r from-gray-800 via-gray-400 to-gray-800" />
            </a>
            <a href="#experiences" class="relative group p-2 flex justify-center delay-200">
                <p>{{ $t('experiences') }}</p>
                <div
                    class="w-full scale-x-0 group-hover:scale-x-100 h-px absolute bottom-0 transition ease-in bg-gradient-to-r from-gray-800 via-gray-400 to-gray-800" />
            </a>
            <a href="CV_NEW_LAMBERT_Calvin.pdf" class="relative group p-2 flex justify-center delay-200" target="_blank">
                <p>{{ $t('resume')}}</p>
                <div
                    class="w-full scale-x-0 group-hover:scale-x-100 h-px absolute bottom-0 transition ease-in bg-gradient-to-r from-gray-800 via-gray-400 to-gray-800" />
            </a>
        </div>

        <div class="w-1/5 flex justify-end">
            <svg class="cursor-pointer w-4" @click="changeLangage" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <path fill="white"
                    d="M17.6,4.2l-4-3a1,1,0,0,0-1.05-.09A.977.977,0,0,0,12,2V4H1A1,1,0,0,0,1,6H12V8a.988.988,0,0,0,.55.89A.99.99,0,0,0,13.6,8.8l4-3a1,1,0,0,0,0-1.6Z" />
                <path fill="white"
                    d="M.4,12.2l4-3a1,1,0,0,1,1.05-.09A.977.977,0,0,1,6,10v2H17a1,1,0,0,1,0,2H6v2a.988.988,0,0,1-.55.89A.99.99,0,0,1,4.4,16.8l-4-3a1,1,0,0,1,0-1.6Z" />
            </svg>
        </div>

    </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n';

const { locale } = useI18n({ useScope: 'global' });

const changeLangage = () => {
    if (locale.value == "fr") {
        locale.value = "en"
    } else {
        locale.value = "fr"
    }
}
</script>