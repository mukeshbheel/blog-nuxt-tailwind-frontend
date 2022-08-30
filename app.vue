<template>
  <div>
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup>
useHead({
  title: "blog",
  script: [
    {
      src: "https://kit.fontawesome.com/1fde40d79a.js",
      crossorigin: "anonymous",
      async: "true",
    },
  ],
});
</script>
