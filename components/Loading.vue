<template>
<transition
  enter-active-class="transition ease-in duration-300"
  enter-class="opacity-100"
  enter-to-class="opacity-0"
  leave-active-class="transition ease-in duration-300"
  leave-class="opacity-100"
  leave-to-class="opacity-0"
>
  <div v-if="loading" class="fixed flex z-10 justify-center items-center h-full w-full bg-white text-2xl">
      <img class="animate-bounce-slow rounded-lg shadow-logo-indigo-big" src="/icon.png" alt="Cat Finder">
  </div>
</transition>
</template>

<script>
  export default {
    data: () => ({
      loading: false
    }),
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      }
    }
  }
</script>