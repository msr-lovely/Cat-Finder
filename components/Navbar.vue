<template>
    <nav>
        <div class="border-b border-gray-300 mb-8">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <div class="flex items-center">
                    <NuxtLink to="/" class="flex-shrink-0">
                        <LazyLogo />
                    </NuxtLink>
                    <div class="ml-10 items-baseline space-x-4 nav hidden sm:flex">
                        <NuxtLink to="/" class="text-gray-600 hover:text-gray-800 transition-colors ease-in-out duration-100 px-3 py-2 text-sm py-5">Breed List</NuxtLink>
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