<template>
<div class="mx-7">
    <carousel :items-to-show="1" autoplay="4000" wrapAround="true" transition="2000">
    <slide v-for="slide in slides" :key="slide">
      <img :src="slide" alt="">
    </slide>
    

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</div>
  
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data(){
      return{
          slides:[
              'https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg',
              'https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg',
              'https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
          ]
      }
  }
};
</script>

<style scoped>
.carousel__next {
  background: aliceblue;
}
</style>