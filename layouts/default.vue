<template>
<div class="min-h-screen flex flex-col justify-between">
  <Navbar />
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow mt-8">
    <Nuxt />
  </div>
  <Footer />
</div>
</template>

<style>
body {
  @apply bg-gray-100;
}
.fade-right-enter-active, .fade-right-leave-active {
  @apply transition-all transform duration-300 ease-out;
}
.fade-right-enter, .fade-right-leave-to {
  @apply opacity-0 translate-x-4;
}
.fade-left-enter-active, .fade-left-leave-active {
  @apply transition-all transform duration-300 ease-out;
}
.fade-left-enter, .fade-left-leave-to {
  @apply opacity-0 -translate-x-4;
}
</style>