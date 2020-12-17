<template>
<div id="frontpage">
    <!-- Hero section -->
    <div id="hero">
        <Navbar frontpage />
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FrontpageHero />
        </div>
    </div>
    <Nuxt />
  <Footer />
</div>
</template>

<style>
body {
  @apply bg-gray-100;
}
#hero {
  background: radial-gradient(98.47% 98.47% at 52% 1.53%, rgba(250, 157, 206, 0.62) 0%, rgba(255, 255, 255, 0) 100%), #6366F1;
  border-radius: 0 0 100% 100% / 50% 50% 20% 20%;
  @apply shadow-frontpage;
}
.button {
  @apply uppercase rounded-full font-bold px-6 py-2 border text-xs tracking-wider transition-colors duration-100 ease-in-out text-purple-500 border-purple-500;
}
.button.small {
  @apply py-1.5 text-2xs;
}
.button:hover {
  @apply bg-purple-500 text-white;
}
.button.gray {
  @apply border-gray-500 text-gray-500;
}
.button.gray:hover {
  @apply bg-gray-500 text-white;
}
.button.white {
  @apply border-white text-white;
}
.button.white:hover {
  @apply bg-white text-gray-700;
}
.big-heading {
  @apply text-gray-700 text-2xl font-bold leading-7;
}
.small-heading {
  @apply uppercase text-indigo-500 text-sm font-bold;
}
.spacer {
  @apply h-4;
}
.spacer-1 {
  @apply h-8;
}
.spacer-2 {
  @apply h-12;
}
.spacer-3 {
  @apply h-16;
}
.spacer-4 {
  @apply h-20;
}
.spacer-6 {
  @apply h-32;
}
@screen md {
  .button {
    @apply px-10 py-3 text-sm;
  }
  .button.small {
    @apply px-8;
  }
  .big-heading {
    @apply text-4xl leading-10;
  }
  .spacer {
    @apply h-8;
  }
  .spacer-1 {
    @apply h-16;
  }
  .spacer-2 {
    @apply h-24;
  }
  .spacer-3 {
    @apply h-32;
  }
  .spacer-4 {
    @apply h-40;
  }
  .spacer-6 {
    @apply h-64;
  }
}
</style>