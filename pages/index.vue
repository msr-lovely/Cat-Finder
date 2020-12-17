<template>
<div>
    <div class="spacer-4"></div>

    <!-- Begin 2nd Section -->
    <div class="text-center">
        <container>
        <h6 class="small-heading">Second Section</h6>
        <div class="spacer"></div>
        <h2 class="big-heading">Easily Searchable Cats<br />at Your Fingertips</h2>
        <div class="spacer"></div>
        <p class="text-gray-600 md:w-3/4 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
        </container>

        <div class="spacer"></div>

        <!-- Begin gallery swipe! -->
        <div class="overflow-x-hidden">
            <carousel :perPage="carouselPerPage" :pagination-enabled="false" class="ml-6 my-10">
                <slide v-for="(breed, i) in breeds" :key="'card-' + i">
                        <card class="w-56 mr-6 transition-transform transform hover:scale-105 duration-100" style="height: 17rem">
                            <div class="bg-indigo-500 h-32 bg-cover bg-center" :style="'background-image: url(' + breed.image + ')'"></div>
                            <div class="mt-4 mb-2 text-indigo-500 font-bold text-sm">{{ breed.name }}</div>
                            <p class="mb-4 text-gray-600 text-xs w-4/5 mx-auto">{{breed.temperament.split(', ').slice(0,5).join(', ')}}</p>
                            <NuxtLink 
                                :to="{
                                    name: 'breed', 
                                    query: { name: encodeURI(breed.name) }
                                }" class="button gray small"
                            >
                            View
                            </NuxtLink>
                        </card>
                </slide>
            </carousel>
        </div>

        <div class="spacer"></div>

        <NuxtLink to="breed_list" class="button">View All</NuxtLink>
    </div>

    <div class="spacer-6"></div>

    <!-- Section 3, left and right illustrations -->
    <container>
        <div>
            <div class="grid grid-cols-2 sm:text-left text-center gap-8 sm:gap-0">
                <div class="sm:flex sm:items-center sm:col-span-1 col-span-2">
                    <img src="Chilling.svg" class="sm:w-4/5" />
                </div>
                <div class="sm:flex sm:items-center sm:col-span-1 col-span-2">
                    <div class="sm:max-w-xs md:max-w-sm">
                        <h6 class="small-heading">First Step</h6>
                        <div class="spacer"></div>
                        <h3 class="big-heading">Enjoy the cats at the convenient of your own home</h3>
                        <div class="spacer"></div>
                        <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>

                <div class="col-span-2 spacer-4"></div>

                <div class="sm:flex sm:items-center sm:col-span-1 col-span-2">
                    <div class="sm:max-w-xs md:max-w-sm">
                        <h6 class="small-heading">Second Step</h6>
                        <div class="spacer"></div>
                        <h3 class="big-heading">Find all the cats!</h3>
                        <div class="spacer"></div>
                        <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                <div class="sm:flex sm:items-center sm:col-span-1 col-span-2">
                    <img src="Playful.svg" class="sm:w-4/5" />
                </div>
            </div>
        </div>

        <div class="spacer-3"></div>

        <!-- Gallery -->
        <div v-if="gallery.length > 0">
            <div class="spacer-3"></div>

            <h2 class="big-heading text-center">Gallery</h2>
            <div class="spacer-2"></div>

            <!-- Load the photos -->
            <div v-masonry transition-duration="0.3s" gutter="24">
                <img v-masonry-tile v-for="(image, i) in gallery" :key="i" :src="image" class="item rounded-xl shadow-frontpage max-w-xs mb-6 transition-transform transform duration-100 hover:scale-105" />
            </div>
        </div>
    </container>
</div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import Container from "@/components/Container";
import Card from "@/components/frontpage/Card";
export default {
    layout: "frontpage",
    components: {
        Carousel, Slide,
        Card, Container
    },
    data() {
        return {
            gallery: [],
            breeds: []
        }
    },
    computed: {
        carouselPerPage() {
            return Math.ceil(window.innerWidth / 248) + 0.5;
        }
    },
    async mounted() {
        // load the gallery
        // let images = await this.$axios.$get('images/search', {
        //     params: {
        //         size: 'small', 
        //         limit: 5
        //     }
        // });
        // images = images.map(data=>data.url);
        // this.gallery = images;

        // TODO: don't repeat this function from Searchbar.vue
        let breeds = sessionStorage.getItem('cat_breeds');
        if (breeds == null) {
            // load from the breeds list
            var t = this;
            this.$axios.get('breeds')
            .then(({data}) => {
                breeds = data.map(data=> { 
                return { 
                    name: data.name, 
                    temperament: data.temperament,
                    image: data.hasOwnProperty('image') ? data.image.url : null
                };
                });
                breeds.sort( () => Math.random() - 0.5 );
                t.breeds = breeds;
                sessionStorage.setItem('cat_breeds', JSON.stringify(breeds));
            });
        } else {
            this.breeds = JSON.parse(breeds);
        }
    }
}
</script>

<style>
#frontpage .VueCarousel-wrapper {
    @apply overflow-visible;
}
.VueCarousel-dot-container {
  @apply mt-8 !important;
}
.VueCarousel-dot {
  @apply bg-gray-400 mt-0 p-2 !important;
}
.VueCarousel-dot--active {
  @apply bg-indigo-500 !important;
}
</style>