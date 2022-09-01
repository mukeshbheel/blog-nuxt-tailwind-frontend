<template>
    <div class="flex flex-row justify-center my-9 mx-7">

    <!-- .............................main posts.......................... -->
    <div class="main basis-3/4">
      <div class="flex flex-row justify-center" v-if="item">
        <div class="allPosts my-9">
          <div class="date text-center text-slate-400 text-sm">
            {{store.getBlogDate(new Date(item[0].date))}}
          </div>
          <div class="title text-center text-xl my-4 capitalize">{{  item[0].title }}</div>
          <div
            class="
              tags
              flex flex-row
              justify-center
              my-9
              text-slate-400 text-lg
            "
          >
            <div class="tag mx-2 text-sm" v-for="tag in item[0].tags" :key="tag">#{{ tag }}</div>
          </div>
          <div class="mainImage justify-center">
            <img
              class="mx-auto"
              :src="item[0].image"
              alt=""
              srcset=""
            />
          </div>
          <div class="description my-9 text-slate-500 leading-9">
            {{  item[0].description }}
          </div>
          
        </div>
      </div>
      
    </div>

    <!-- ..................sidebar............................ -->
    
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import store from '~/store'
export default{
    props:{
        
    },
    data(){
      return {
        item: null,
        store: store,
      }
    },
    async mounted(){
      console.log(this.$route.params.id)
      await store.setCurrentBlog(this.$route.params.id)
      this.item = store.getCurrentBlog();
        if(window.scrollY != 0){
            window.scrollTo({top:0})
        }

        
    }
}
</script>
