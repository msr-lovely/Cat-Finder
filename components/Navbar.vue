<template>
    <nav>
        <div :class="frontpage ? '' : 'border-b border-gray-300'">
            <div class="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 space-x-8 flex items-center justify-between">
                <div class="flex items-center">
                    <NuxtLink to="/" class="flex-shrink-0">
                        <logo :frontpage="frontpage" />
                    </NuxtLink>
                    <div class="sm:ml-10 items-baseline space-x-4 nav flex">
                        <NuxtLink to="/breed_list" :class="frontpage ? 'text-white hover:border-white' : 'text-gray-600 hover:text-gray-800'" class="transition-colors border border-transparent ease-in-out duration-100 sm:px-3 px-2 text-sm py-2 sm:my-3 my-2 rounded-md">Breeds</NuxtLink>
                    </div>
                </div>

                <Searchbar :frontpage="frontpage" />
            </div>
        </div>
    </nav>
</template>

<script>
import Logo from "@/components/small/Logo";
export default {
    components: {
        Logo
    },
    props: {
        frontpage: Boolean
    }
}
</script>

<style>
</style>