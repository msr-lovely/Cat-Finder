<template>
    <a :href="href" target="_blank">
        <svg role="img" :class="size" class="transition-colors duration-300 ease-in-out text-gray-500 fill-current hover:text-indigo-500" :viewBox="viewBox" xmlns="http://www.w3.org/2000/svg">
            <slot></slot>
        </svg>
    </a>
</template>

<script>
export default {
    props: {
        href: String,
        size: {type: String, default: 'w-6'},
        viewBox: {type: String, default: '0 0 24 24'}
    }
}
</script>