<template>
    <div class="rounded-md shadow-lg overflow-hidden flex items-center bg-gray-900">
        <img 
            :src="lazy ? 'data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=' : src" 
            :data-src="src" 
            class="w-full transition duration-200 ease-in-out transform hover:scale-105" 
            :class="{lazyload: lazy}"
        />
    </div>
</template>

<script>
import 'lazysizes';
export default {
    props: {
        src: String,
        lazy: {
            type: Boolean,
            default: true
        }
    }
}
</script>