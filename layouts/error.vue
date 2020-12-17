<template>
  <div class="flex items-center justify-center fixed inset-0 text-center" style="z-index:-1">
      <div>
        <img src="images/Error.svg" class="md:w-full w-3/4 mb-8 max-w-lg mx-auto" />
        <h1 class="md:text-5xl text-4xl font-bold text-gray-600">
            <template v-if="error.statusCode === 404">
                Page not found
            </template>
            <template v-else>An error occurred</template>
        </h1>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    // layout: 'error' // you can set a custom layout for the error page
  }
</script>
