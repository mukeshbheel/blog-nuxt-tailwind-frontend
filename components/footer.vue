<template>
<div>
    <div class=" main flex flex-row mx-7" v-if="footerPostsData">
        <div class="flex flex-row basis-1/4" v-for="item in footerPostsData" :key="item._id">
        <div class="image">
            <img :src="item.image" alt="">
        </div>
        <div class="mx-2">
            <p class="date tag text-slate-500 text-sm my-3">{{ store.getBlogDate(new Date(item.date)) }}</p>
            <h2 class="title">{{item.title}}</h2>
            <div class="tags my-3">
                <p class="tag text-slate-500 text-sm" v-for="tag in item.tags" :key="tag">#{{tag}}</p>
            </div>
            <div class="link underline decoration-1" @click="$router.push(`/BlogDetails/${item._id}`)">
                Read More
                </div>
        </div>
        </div>
    </div>

    <!-- <div class="insta flex flex-row">
        <div class="basis-1/6" v-for="index in 6" :key="index">
            <img src="https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y29kaW5nfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="">
        </div>
    </div> -->

    <!-- ............scroll to top...................................... -->
    <button id="scrollTop" class="scrollTop bg-slate-500 hover:bg-slate-400 text-white font-bold py-2 px-4 border-b-4 border-black-700 hover:border-black-500 rounded-full" @click="scrollTop">Go Top</button>

</div>
    


</template>

<script>
import { ref, onMounted } from 'vue'
import store from '~/store'
export default{
    setup() {
        const footerPostsData = ref(null)
        const featuredPosts = ref([
        {
        _id: "63060ff74af2f2d4fbf32817",
        image:
          "https://images.unsplash.com/photo-1611124600582-c9ef0e977585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        title: "Why I love winter: A short Story",
        category: "footerPost",
        tags: ["winter",'travel','playground','potato'],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullamvel orci dui. Suspendisse sit amet laoreet neque. Fusce sagittissuscipit sem a consequat. Proin nec interdum sem. Quisque inporttitor magna, a imperdiet est.",
        date: "january 30, 2018",
        __v: 0,
      },
      {
        _id: "63060ff74af2f2d4fbf32818",
        image:
          "https://images.unsplash.com/photo-1551582045-6ec9c11d8697?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
        title: "Why I love winter: A short Story",
        category: "footerPost",
        tags: ["winter",'travel','playground','potato'],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullamvel orci dui. Suspendisse sit amet laoreet neque. Fusce sagittissuscipit sem a consequat. Proin nec interdum sem. Quisque inporttitor magna, a imperdiet est.",
        date: "january 30, 2018",
        __v: 0,
      },
      {
        _id: "63060ff74af2f2d4fbf32819",
        image:
          "https://images.unsplash.com/photo-1660296629259-9b387ff54a91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
        title: "Why I love winter: A short Story",
        category: "footerPost",
        tags: ["winter",'travel','playground','potato'],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullamvel orci dui. Suspendisse sit amet laoreet neque. Fusce sagittissuscipit sem a consequat. Proin nec interdum sem. Quisque inporttitor magna, a imperdiet est.",
        date: "january 30, 2018",
        __v: 0,
      },
      {
        _id: "63060ff74af2f2d4fbf32810",
        image:
          "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
        title: "Why I love winter: A short Story",
        category: "footerPost",
        tags: ["winter",'travel','playground','potato'],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullamvel orci dui. Suspendisse sit amet laoreet neque. Fusce sagittissuscipit sem a consequat. Proin nec interdum sem. Quisque inporttitor magna, a imperdiet est.",
        date: "january 30, 2018",
        __v: 0,
      },
    ])

        onMounted(async() => {
          footerPostsData.value = await store.setPosts('footerPost')
        })

        return{
            featuredPosts,
            footerPostsData,
            store,
        }
    },
    mounted () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll (event) {
        if(window.scrollY > 500){
            document.getElementById('scrollTop').style.display = 'block'
        }else{
            document.getElementById('scrollTop').style.display = 'none'
        }
      // Any code to be executed when the window is scrolled
    },

    scrollTop(){
        console.log('hello')
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
  }
}
</script>


<style scoped>
.main{
    margin-top: 8rem;
    margin-bottom: 4rem;
}
.scrollTop {
    position: fixed;
    bottom: 12%;
    right: 5%;
    z-index: 3;
    display: none;
}
</style>