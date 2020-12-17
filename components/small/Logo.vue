<template>
    <div class="logo flex items-center transition-colors duration-300 cursor-pointer" :class="frontpage ? 'text-gray-200 hover:text-white' : 'text-gray-700 hover:text-black'">
        <img class="icon rounded-md mr-2 h-8 w-8 shadow-logo-indigo" src="/icon.png" alt="Cat Finder">
        <div class="font-semibold text-lg sm:block hidden">Cat Finder</div>
    </div>
</template>

<script>
export default {
    props: {
        frontpage: Boolean
    }
}
</script>

<style>
.logo:hover .icon {
    @apply animate-wiggle;
}
</style>