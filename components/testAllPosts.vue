<template>
    <div class="sm:flex flex-row justify-center my-9 mx-7">

        <!-- .............................main posts.......................... -->
        <div class="sm:main sm:basis-3/4" v-if="allPostsData">
            <div class="sm:flex flex-row justify-center" v-for="item in pageBlogs" :key="item._id">
                <div class="allPosts my-9">
                    <div class="date text-center text-slate-400 text-sm"
                        v-if="store.getBlogDate(item.date) != undefined">
                        {{store.getBlogDate(item.date)}}
                    </div>
                    <div class="title text-center text-xl my-4 capitalize">{{ item.title }}</div>
                    <div class="
                tags
                flex flex-row
                justify-center
                mb-9
                text-slate-400
              ">
                        <div class="tag mx-2 text-sm" v-for="tag in item.tags" :key="tag">#{{ tag }}</div>
                    </div>
                    <div class="mainImage justify-center">
                        <img class="mx-auto px-7" :src="item.image" alt="" srcset="" />
                    </div>
                    <div class="description my-9 mx-6 text-slate-500 leading-9 overflow-hidden"
                        v-html="item.description">

                    </div>
                    <div class="readMore flex flex-row justify-center">
                        <button class="bg-gray-800 text-white px-5 py-5"
                            @click="$router.push(`/BlogDetails/${item._id}`)">Read More</button>
                    </div>
                </div>
            </div>
            <div class="pagination" v-if="allPostsData && allPostsData.length > 0">
                <button
                    :class="blogPage == i?'bg-gray-800 text-white px-5 py-2':'bg-gray-100 px-5 py-2 mx-1 hover:text-white hover:bg-gray-800'"
                    v-for="i in allPostsData.length%3==0?allPostsData.length/3:Math.ceil(allPostsData.length/3)"
                    :key="i" @click="blogPage=i; $router.push(`/?page=${i}`)">{{i}}</button>
            </div>
        </div>

        <!-- ..................sidebar............................ -->
        <div class="sidebar sm:basis-1/4 flex-column justify-center">
            <a href="https://www.youtube.com/" target="_blank">
                <div class="profile my-9 sm:block hidden">
                    <img src="https://images.unsplash.com/photo-1561152820-340780bc049e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                        alt="" class="rounded-full" />
                    <h2 class="subscribe">Subscribe</h2>
                    <p class="text-slate-500 uppercase">To my youtube channel</p>
                </div>
            </a>

            <div class="aboutMe">
                <h2 class="text-xl mt-4">I'm Your Name</h2>
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
                            <img class="mx-auto" :src="item.image" alt="" srcset="" />
                        </div>
                        <div class="date text-slate-400 text-sm tracking-wider uppercase mt-3">
                            <!-- {{ store.getBlogDate(item.date) }} -->
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
import { ref, onMounted, watch } from "vue";
import store from '~/store'
export default {
    props: {
        data: {
            type: Array,
            default: null,
        }
    },
    setup(props) {
        const router = useRouter();
        const route = useRoute();
        const allPostsData = ref(null);
        const sidebarPostsData = ref(null)
        const blogPage = ref(1)

        watch(blogPage, (newPage, oldPage) => {
            if (newPage != oldPage) {
                console.log('new page')
                window.scrollTo({ top: 1000, behavior: 'smooth' })
            }

        })

        const pageBlogs = computed(() => {
            if (allPostsData.value && allPostsData.value.length < 5) {
                console.log('in if')
                return allPostsData.value
            } else {
                var i = 3 * (blogPage.value - 1);
                var index = i;
                const arr = [];
                while (allPostsData.value[index] && index < (i + 3)) {
                    arr.push(allPostsData.value[index])
                    index++;
                }
                console.log(arr)
                console.log('in else')
                return arr
            }
        })


        onMounted(async () => {
            allPostsData.value = props.data;
            console.log(allPostsData.value)

            sidebarPostsData.value = await store.setPosts('sidebarPost')
            console.log(sidebarPostsData.value)
            if (route.query.page) {
                blogPage.value = route.query.page;
            }

        })
        return {
            allPostsData,
            sidebarPostsData,
            store,
            blogPage,
            pageBlogs,
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

.description {
    height: 70px;
}
</style>