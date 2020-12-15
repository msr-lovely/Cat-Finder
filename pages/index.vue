<template>
<div>
  <transition-group tag="div" name="fade-right">
    <div class="flex text-gray-700 pb-4 mb-4" :class="i < breeds.length - 1 ? 'border-b border-gray-300' : ''" v-for="(breed, i) in breeds" :key="breed.name">
        <!-- enter-active-class="animate__animated animate__animate__fadeInRight" -->
        <div class="flex items-start">
            <!-- Image -->
            <NuxtLink :to="{name: 'breed', query: {name: encodeURI(breed.name)}}" v-if="breed.image" class="rounded-md shadow-lg w-24 flex-shrink-0 sm:mr-6 mr-4 overflow-hidden block">
                <LazyImage :src="breed.image.url" />
            </NuxtLink>

            <div class="text-md flex-grow">
                <!-- Breed Name -->
                <NuxtLink :to="{name: 'breed', query: {name: encodeURI(breed.name)}}" class="font-semibold block">
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
  <infinite-loading @infinite="infiniteHandler"></infinite-loading>
</div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';
export default {
  components: {
    InfiniteLoading,
  },
  data() {
      return {
          page: 0,
          breeds: []
      }
  },
  methods: {
    async infiniteHandler($state) {
      this.$axios.get('breeds', {
        params: {
            limit: 5,
            page: this.page,
        },
      }).then(({ data }) => {
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
