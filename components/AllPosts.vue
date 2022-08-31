<template>
  <div class="flex flex-row justify-center my-9 mx-7">

    <!-- .............................main posts.......................... -->
    <div class="main basis-3/4" v-if="allPostsData">
      <div class="flex flex-row justify-center" v-for="item in allPostsData" :key="item._id">
        <div class="allPosts my-9">
          <div class="date text-center text-slate-400 text-sm">
            {{store.getBlogDate(new Date(item.date))}}
          </div>
          <div class="title text-center text-xl my-4 capitalize">{{  item.title }}</div>
          <div
            class="
              tags
              flex flex-row
              justify-center
              mb-9
              text-slate-400
            "
          >
            <div class="tag mx-2 text-sm" v-for="tag in item.tags" :key="tag">#{{ tag }}</div>
          </div>
          <div class="mainImage justify-center">
            <img
              class="mx-auto"
              :src="item.image"
              alt=""
              srcset=""
            />
          </div>
          <div class="description my-9 mx-6 text-slate-500 leading-9">
            {{  item.description }}
          </div>
          <div class="readMore flex flex-row justify-center">
            <button class="bg-gray-800 text-white px-5 py-5" @click="$router.push(`/BlogDetails/${item._id}`)">Read More</button>
          </div>
        </div>
      </div>
      <div class="pagination">
        <button class="bg-gray-800 text-white px-5 py-2 mx-1">1</button>
        <button
          class="bg-gray-100 px-5 py-2 mx-1 hover:text-white hover:bg-gray-800"
        >
          2
        </button>
        <button
          class="bg-gray-100 px-5 py-2 mx-1 hover:text-white hover:bg-gray-800"
        >
          3
        </button>
      </div>
    </div>

    <!-- ..................sidebar............................ -->
    <div class="sidebar basis-1/4 flex-column justify-center">
    <a href="https://www.youtube.com/" target="_blank">
      <div class="profile my-9">
        <img
          src="https://images.unsplash.com/photo-1561152820-340780bc049e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          alt=""
          class="rounded-full"
        />
        <h2 class="subscribe">Subscribe</h2>
        <p class="text-slate-500 uppercase">To my youtube channel</p>
      </div>
    </a>
      
      <div class="aboutMe">
        <h2 class="text-xl mt-4">I'm Mukesh Bheel</h2>
        <p class="text-slate-400 my-4 leading-9">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel
          tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel
          orci dui. Suspendisse sit amet laoreet neque. Fusce sagittis suscipit
          sem a consequat. Proin nec interdum sem. Quisque in porttitor magna.
        </p>
      </div>
      <template v-if="sidebarPostsData">
        <div class="flex flex-row justify-center" v-for="item in sidebarPostsData" :key="item._id">
        <div class="allPosts my-9" @click="$router.push(`/BlogDetails/${item._id}`)">
          <div class="mainImage justify-center">
            <img
              class="mx-auto"
              :src="item.image"
              alt=""
              srcset=""
            />
          </div>
          <div
            class="date text-slate-400 text-sm tracking-wider uppercase mt-3"
          >
            {{ store.getBlogDate(new Date(item.date)) }}
          </div>
          <div class="Sidebartitle text-xl my-2">
            {{ item.title }}
          </div>
          <div class="tags flex flex-row my-5 text-slate-400 text-lg">
            <div class="tag mx-2 text-sm" v-for="tag in item.tags" :key="tag">#{{ tag }}</div>
          </div>
        </div>
      </div>
      </template>
      
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import store from '~/store'
export default {
  setup() {
    const router = useRouter();
    const allPostsData = ref(null);
    const sidebarPostsData = ref(null)
    const data = ref([
      {
        _id: "63060ff74af2f2d4fbf32815",
        image:
          "https://preview.colorlib.com/theme/blanca/images/x3.jpg.pagespeed.ic.K5CKn3RSE4.webp",
        title: "Why I love winter: A short Story",
        category: "food",
        tags: ["hello",'travel','playground','potato'],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullamvel orci dui. Suspendisse sit amet laoreet neque. Fusce sagittissuscipit sem a consequat. Proin nec interdum sem. Quisque inporttitor magna, a imperdiet est.",
        date: "january 30, 2018",
        __v: 0,
      },
      {
        _id: "63060ff74af2f2d4fbf32816",
        image:
          "https://preview.colorlib.com/theme/blanca/images/x3.jpg.pagespeed.ic.K5CKn3RSE4.webp",
        title: "Why I love winter: A short Story",
        category: "food",
        tags: ["winter",'travel','playground','potato'],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullamvel orci dui. Suspendisse sit amet laoreet neque. Fusce sagittissuscipit sem a consequat. Proin nec interdum sem. Quisque inporttitor magna, a imperdiet est.",
        date: "january 30, 2018",
        __v: 0,
      },
      {
        _id: "63060ff74af2f2d4fbf32817",
        image:
          "https://preview.colorlib.com/theme/blanca/images/x3.jpg.pagespeed.ic.K5CKn3RSE4.webp",
        title: "Why I love winter: A short Story",
        category: "food",
        tags: ["winter",'travel','playground','potato'],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullamvel orci dui. Suspendisse sit amet laoreet neque. Fusce sagittissuscipit sem a consequat. Proin nec interdum sem. Quisque inporttitor magna, a imperdiet est.",
        date: "january 30, 2018",
        __v: 0,
      },
    ]); 

    const sidebarPosts = ref([
        {
        _id: "63060ff74af2f2d4fbf32817",
        image:
          "https://images.unsplash.com/photo-1611124600582-c9ef0e977585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        title: "Why I love winter: A short Story",
        category: "sidebarPost",
        tags: ["winter",'travel','playground','potato'],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullamvel orci dui. Suspendisse sit amet laoreet neque. Fusce sagittissuscipit sem a consequat. Proin nec interdum sem. Quisque inporttitor magna, a imperdiet est.",
        date: "january 30, 2018",
        __v: 0,
      },
      {
        _id: "63060ff74af2f2d4fbf32818",
        image:
          "https://images.unsplash.com/photo-1653216977228-5669df1fc892?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
        title: "Why I love winter: A short Story",
        category: "sidebarPost",
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
        category: "sidebarPost",
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
        category: "sidebarPost",
        tags: ["winter",'travel','playground','potato'],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullamvel orci dui. Suspendisse sit amet laoreet neque. Fusce sagittissuscipit sem a consequat. Proin nec interdum sem. Quisque inporttitor magna, a imperdiet est.",
        date: "january 30, 2018",
        __v: 0,
      },
    ])

    
    onMounted(async()=>{
      console.log(allPostsData.value)
      allPostsData.value = await store.setPosts('general');
      console.log(allPostsData.value)

      sidebarPostsData.value = await store.setPosts('sidebarPost')
      console.log(sidebarPostsData.value)
      // console.log(store.getAllPosts())

      // await store.setPosts('sidebarPosts');
      // sidebarPostsData.value = store.getSidebarPosts();

    })
    return{
        data,
        sidebarPosts,
        allPostsData,
        sidebarPostsData,
        store,
    }
  },
};
</script>


<style scoped>
.title {
  font-weight: 400;
  word-spacing: 1.5px;
}

.main {
  width: 70%;
}

.readMore button {
  width: 12rem;
}

.sidebar {
  margin-top: -19%;
  z-index: 2;
}

.aboutMe {
  margin-top: 5rem;
}

.profile h2 {
  font-size: 5rem;
  font-family: 'Qwitcher Grypen', cursive;
}

.sidebartitle {
  font-size: 1rem;
  font-weight: 600;
}
</style>