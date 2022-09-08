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
      src: "https://kit.fontawesome.com/116a9bd05a.js",
      crossorigin: "anonymous",
      async: "true",
    },
  ],
});
</script>
