<template>
    <a :href="href" target="_blank">
        <svg role="img" class="w-6 transition-colors duration-100 ease-in-out text-gray-500 fill-current hover:text-indigo-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <slot></slot>
        </svg>
    </a>
</template>

<script>
export default {
    props: {
        href: String
    }
}
</script>