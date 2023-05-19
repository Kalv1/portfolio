<template>
    <div class="relative z-1 group">
        <div class="transition-width duration-200 ease-in w-0 group-hover:w-2/3 h-[1px] bg-gradient-to-r from-gray-800 via-gray-400 to-gray-800 left-1/2 -translate-x-1/2 absolute top-0 z-[2]"/>
        <div class="transition-width duration-200 ease-in w-0 group-hover:w-2/3 h-[1px] bg-gradient-to-r from-gray-800 via-gray-400 to-gray-800 left-1/2 -translate-x-1/2 absolute bottom-0 z-[2]"/>
        <div class="z-1 bg-[#18181b] backdrop-blur-lg bg-opacity-60 w-full border h-full border-px border-gray-800 rounded-md overflow-hidden">
            <div class="p-8">
                <slot />
            </div>
        </div>
        <div class="absolute z-[-1] transition-all duration-200 ease-in scale-0 group-hover:scale-100 bg-gradient-to-r from-[#A709DC] to-[#0655F3] w-[350px] h-[250px] blur-3xl rounded-full blur top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-70" />
    </div>
</template>

<script setup>


</script>