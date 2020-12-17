<template>
<div>
  <transition-group tag="div" name="fade-right">
    <div class="flex text-gray-700 pb-4 mb-4" :class="i < breeds.length - 1 ? 'border-b border-gray-300' : ''" v-for="(breed, i) in breeds" :key="breed.name">
        <!-- enter-active-class="animate__animated animate__animate__fadeInRight" -->
        <div class="flex items-start">
            <!-- Image -->
            <NuxtLink :to="{name: 'breed', query: {name: encodeURI(breed.name)}}" v-if="breed.image" class="rounded-md shadow-lg w-24 flex-shrink-0 sm:mr-6 mr-4 overflow-hidden block">
                <image-scale :src="breed.image.url" />
            </NuxtLink>

            <div class="text-md flex-grow">
                <!-- Breed Name -->
                <NuxtLink :to="{name: 'breed', query: {name: encodeURI(breed.name)}}" class="font-semibold block hover:text-indigo-500 transition-colors duration-100 ease-in-out">
                    {{ breed.name }}
                </NuxtLink>

                <!-- Temperament -->
                <p class="text-xs font-semibold text-indigo-500 mb-2">{{ breed.temperament }}</p>

                <!-- Description -->
                <p class="text-sm text-gray-600 mb-4">{{ breed.description }}</p>
            </div>
        </div>
    </div>
  </transition-group>
  <client-only>
    <infinite-loading @infinite="infiniteHandler" class="w-full h-16"></infinite-loading>
  </client-only>
</div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';
import ImageScale from "@/components/small/ImageScale";
export default {
  components: {
    InfiniteLoading,
    ImageScale
  },
  data() {
      return {
          page: 0,
          breeds: []
      }
  },
  methods: {
    async infiniteHandler($state) {
      console.log($state);
      this.$axios.get('breeds', {
        params: {
            limit: 5,
            page: this.page,
        },
      }).then(({ data }) => {
        console.log('loaded');
        if (data.length) {
          this.page++;
          let inter = setInterval(()=>{
            this.breeds.push(data.shift());
            if (data.length == 0) {
              $state.loaded();
              clearInterval(inter);
            }
          }, 300);
        } else {
          $state.complete();
        }
      });
    },
  },
}
</script>
