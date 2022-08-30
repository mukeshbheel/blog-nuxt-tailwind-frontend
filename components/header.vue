<template>
  <div class="mb-7">
    <div class="topBar flex flex-row uppercase mx-7 py-5 text-slate-400 tracking-wide">
      <p class="basis-1/4">Hello World, My name is Mukesh</p>
      <p class="basis-1/4">mukeshbheel001@gmail.com</p>
      <ul class="basis-1/4 flex flex-row justify-center">
        <li class="basis-1/6"><a href="https://www.instagram.com/?hl=en" target="_blank"><img class="w-5" src="../assets/icons/instagram.png" alt="" srcset=""></a></li>
        <li class="basis-1/6"><a href="https://www.facebook.com/" target="_blank"><img class="w-5" src="../assets/icons/facebook.png" alt="" srcset=""></a></li>
        <li class="basis-1/6"><a href="https://twitter.com/" target="_blank"><img class="w-5" src="../assets/icons/twitter.png" alt="" srcset=""></a></li>
        <li class="basis-1/6 text-xs"><nuxt-link href="/AdminPanel/Dashboard" target="_blank">Admin Panel</nuxt-link></li>
      </ul>
      <div class="search basis-1/4">
        <input class="bg-slate-100 p-1" type="text" placeholder="search" v-model="searchTerm"/>
        <button type="submit">Search</button>
      </div>
    </div>
    <div class="mainHead">
        <div class="logo mx-auto text-center"><span><NuxtLink to="/">Mukesh</NuxtLink></span></div>
        <div class="subtitle text-center uppercase text-slate-400 tracking-widest">personal blog</div>
        <div class="navbar flex flex-row justify-center">
            <ul class="flex flex-row uppercase basis-3/5">
                <li class="category basis-1/4 text-center"><NuxtLink to="/">Home</NuxtLink></li>
                <li class="category basis-1/4 text-center">featured</li>
                <li class="category basis-1/4 text-center">about me</li>
                <li class="category basis-1/4 text-center">contact</li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  setup() {
    const router = useRouter()
    const searchTerm = ref('')
    const searchResult = computed(() => {
      
    })
  },
}
</script>

<style scoped>
.topBar{
    word-spacing: 0.1rem;
}
.logo {
    font-size: 100px;
    font-family: 'Dancing Script', cursive;
    color: #2f2f2f;
    text-decoration: none;
    font-weight: 500;
}

.subtitle {
    margin-left: 25rem;
    margin-bottom: 2rem;
}

.category {
    font-weight: 500;
}
</style>