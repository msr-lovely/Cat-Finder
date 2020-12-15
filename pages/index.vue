<template>
<div>
    <div class="flex text-gray-700 pb-4 mb-4" :class="i < $store.state.breed.list.length - 1 ? 'border-b border-gray-300' : ''" v-for="(breed, i) in $store.state.breed.list" :key="breed.name">
        <div class="flex items-start">
            <NuxtLink :to="{name: 'breed', query: {name: encodeURI(breed.name)}}" v-if="breed.image" class="rounded-md shadow-lg w-24 flex-shrink-0 sm:mr-6 mr-4 overflow-hidden block">
                <img 
                    src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=" :data-src="breed.image.url" 
                    class="w-full transition duration-200 ease-in-out transform hover:scale-105 lazyload" 
                />
            </NuxtLink>
            <div class="text-md flex-grow">
            <NuxtLink :to="{name: 'breed', query: {name: encodeURI(breed.name)}}" class="font-semibold block">
                {{ breed.name }}
            </NuxtLink>
            <p class="text-xs font-semibold text-indigo-500 mb-2">{{ breed.temperament }}</p>

            <!-- Description -->
            <p class="text-sm text-gray-600 mb-4">{{ breed.description }}</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    mounted() {
        this.$nextTick(()=> {
            lazyload();
        });
    }
}
</script>