<template>
<div>
  <Navbar />
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <Nuxt />
  </div>
  <Footer />
</div>
</template>

<style>
.fade-right-enter-active, .fade-right-leave-active {
  @apply transition-all transform duration-300 ease-out;
}
.fade-right-enter, .fade-right-leave-to {
  @apply opacity-0 translate-x-4;
}
.fade-down-enter-active, .fade-down-leave-active {
  @apply transition-all transform duration-300 ease-out;
}
.fade-down-enter, .fade-down-leave-to {
  @apply opacity-0 -translate-y-4;
}
</style>