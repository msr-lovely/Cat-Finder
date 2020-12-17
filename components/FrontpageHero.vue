<template>
    <div class="md:pt-12 pt-8 md:pb-20 pb-12 flex items-center md:space-x-4">
        <div class="sm:block hidden w-1/2 flex-shrink-0 flex items-center">
            <img src="images/CatWindow.svg" class="w-full shadow-frontpage-catWindow" style="transform: perspective(60rem) rotateY(30deg)" />
        </div>
        <div class="text-white md:text-lg text-sm sm:text-left text-center md:mb-6">
            <h2 class="md:text-4xl text-2xl font-bold mb-4">Search any CAT</h2>
            <p class="mb-4">Powered by Cat Facts API, our lightweight frontend makes for an easy search.</p>
            <p class="mb-8">Ready to meet our cats?</p>
            <p><NuxtLink to="breed_list" class="button white">Cat List</NuxtLink></p>
        </div>
    </div>
</template>