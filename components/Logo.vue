<template>
    <div class="logo flex items-center transition-colors duration-100 text-gray-700 hover:text-black cursor-pointer">
        <img class="icon rounded-md mr-2 h-8 w-8 shadow-logo-indigo" src="/icon.png" alt="Cat Finder">
        <div class="font-semibold text-lg sm:block hidden">Cat Finder</div>
    </div>
</template>

<style>
.logo:hover .icon {
    @apply animate-wiggle;
}
</style>