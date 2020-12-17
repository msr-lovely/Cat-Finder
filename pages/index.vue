<template>
<div class="overflow-hidden">
    <div class="spacer-4"></div>

    <!-- Begin 2nd Section -->
    <div class="text-center relative">
        <!-- BG LEFT -->
        <img src="images/bg/BG_L_0.svg" class="absolute transform -translate-x-1/2 -translate-y-1/2" style="top:50%; left: 5vw;" />
        <img src="images/bg/BG_Particle_0.svg" class="absolute" style="top:90%; left: 5vw;" />
        <!-- BG RIGHT -->
        <img src="images/bg/BG_Particle_1.svg" class="absolute" style="top:103%; right: 20vw;" />
        <img src="images/bg/BG_Particle_2.svg" class="absolute" style="top:92%; right: 12vw;" />
        <img src="images/bg/BG_R_0.svg" class="absolute transform translate-x-1/2 -translate-y-1/2" style="top:130%; right: -6vw;" />
        <img src="images/bg/BG_R_1.svg" class="absolute transform -translate-y-1/2" style="top:122%; right: -4vw;" />
        
        <div class="relative">
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
    </div>

    <div class="spacer-6"></div>

    <!-- Section 3, left and right illustrations -->
    <container class="relative">
        <!-- BG LEFT -->
        <img src="images/bg/BG_L_1.svg" class="absolute transform scale-50 rotate-180" style="top:22%; left: 12vw;" />
        <img src="images/bg/BG_Particle_0.svg" class="absolute" style="top:48%; left: 3vw; transform: scale(4) rotate(180deg)" />
        <img src="images/bg/BG_Particle_1.svg" class="absolute transform rotate-180" style="top:90%; left: 1vw;" />
        <!-- BG RIGHT -->
        <img src="images/bg/BG_Particle_1.svg" class="absolute transform rotate-90" style="top:40%; right: -1vw;" />
        <img src="images/bg/BG_Particle_1.svg" class="absolute transform rotate-45" style="top:75%; right: 5vw;" />

        <div class="relative">
            <div class="grid grid-cols-2 sm:text-left text-center gap-8 sm:gap-0">
                <div class="sm:flex sm:items-center sm:col-span-1 col-span-2">
                    <img src="images/Chilling.svg" class="sm:w-4/5" />
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
                    <img src="images/Playful.svg" class="sm:w-4/5" />
                </div>
            </div>
        </div>

        <!-- Gallery -->
        <div v-if="gallery.length > 0">
            <div class="spacer-6"></div>

            <h2 class="big-heading text-center">Gallery</h2>
            <div class="spacer-2"></div>

            <!-- Load the photos -->
            <div v-masonry transition-duration="0.3s" gutter="24">
                <img v-masonry-tile v-for="(image, i) in gallery" :key="i" :src="image" class="item rounded-xl shadow-frontpage max-w-xs mb-6 transition-transform transform duration-100 hover:scale-105" />
            </div>
        </div>
    </container>

    <div class="spacer-4"></div>

    <!-- Section 4, Contact Me -->
    <container class="relative">
        <!-- BG RIGHT -->
        <img src="images/bg/BG_R_0.svg" class="absolute" style="top:-3vh; right: -55vw; transform: rotate(135deg) translateY(50%)" />

        <div class="relative bg-radius-indigo shadow-frontpage rounded-xl sm:flex sm:space-x-4 text-white mb-12 sm:text-left text-center">
            <div class="md:w-1/3 sm:w-1/2 text-center -mt-16 flex-shrink-0 hidden sm:block">
                <img src="images/Me.svg" class="mx-auto h-full" />
            </div>
            <div class="py-16">
                <h2 class="big-heading mb-6 white">Need a Frontend Developer?</h2>
                <div>
                    <div class="md:flex md:space-x-4 mb-4">
                        <a class="button white block w-64 text-center md:mb-0 mb-4 sm:mx-0 mx-auto" :href="$config.myURL" target="_blank">View My Resume</a>
                        <a class="button white block w-64 text-center sm:mx-0 mx-auto" :href="$config.myURL" target="_blank">View Portfolio -></a>
                    </div>
                    <a :href="'mailto:'+$config.myEmail" class="button white block w-64 text-center sm:mx-0 mx-auto">Contact Me</a>
                </div>
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
            this.$axios.get('breeds')
            .then(({data}) => {
                breeds = data.map(data=> { 
                    return { 
                        name: data.name, 
                        temperament: data.temperament,
                        image: data.hasOwnProperty('image') ? data.image.url : null
                    };
                });
                sessionStorage.setItem('cat_breeds', JSON.stringify(breeds));
                breeds.sort( () => Math.random() - 0.5 );
                this.breeds = breeds.splice(0,12);
            });
        } else {
            breeds = JSON.parse(breeds);
            breeds.sort( () => Math.random() - 0.5 );
            this.breeds = breeds.splice(0,12);
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