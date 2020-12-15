<template>
    <nav>
        <div class="border-b border-gray-300 mb-8">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <div class="flex items-center">
                    <NuxtLink to="/" class="flex-shrink-0 flex items-center">
                        <img class="h-8 w-8 rounded-md mr-2" src="/icon.png" alt="Cat Finder">
                        <div class="font-semibold text-lg text-gray-700 sm:block hidden">Cat Finder</div>
                    </NuxtLink>
                    <div class="ml-10 items-baseline space-x-4 nav hidden sm:flex">
                        <NuxtLink to="/" class="text-gray-600 px-3 py-2 text-sm py-5">Breed List</NuxtLink>
                    </div>
                </div>

                <Searchbar />
            </div>
        </div>
    </nav>
</template>

<style>
nav .nav .nuxt-link-exact-active {
    @apply border-b-2 border-indigo-500 text-gray-900;
}
</style>