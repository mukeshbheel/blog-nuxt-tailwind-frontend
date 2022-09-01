<template>
  <div class="mb-7">
    <div class="topBar flex flex-row uppercase mx-7 pt-5 text-gray-400 tracking-wide">
      <p class="basis-1/4 text-xs pt-1">Hello World, My name is Your Name</p>
      <p class="basis-1/4 text-xs pt-1">YourEmail@gmail.com</p>
      <ul class="basis-1/4 flex flex-row justify-center">
        <li class="basis-1/6"><a href="https://www.instagram.com/?hl=en" target="_blank"><img class="w-5" src="../assets/icons/instagram.png" alt="" srcset=""></a></li>
        <li class="basis-1/6"><a href="https://www.facebook.com/" target="_blank"><img class="w-5" src="../assets/icons/facebook.png" alt="" srcset=""></a></li>
        <li class="basis-1/6"><a href="https://twitter.com/" target="_blank"><img class="w-5" src="../assets/icons/twitter.png" alt="" srcset=""></a></li>
        <li class="basis-1/6 text-xs"><nuxt-link href="/AdminPanel/Dashboard">Admin Panel</nuxt-link></li>
      </ul>
      <div class="search basis-1/4">
        <input class="bg-slate-100 p-1" type="text" placeholder="search" v-model="searchTerm"/>
        <button type="submit">Search</button>
      </div>
    </div>
    <div class="mainHead mb-14">
        <div class="logo mx-auto text-center"><NuxtLink to="/">Your Name</NuxtLink></div>
        <div class="subtitle text-center uppercase text-slate-400 text-xs">personal blog</div>
        <div class="navbar flex flex-row justify-center">
            <ul class="flex flex-row uppercase basis-2/5 text-sm">
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
    font-size: 180px;
    font-family: 'Qwitcher Grypen', cursive;
    color: #2f2f2f;
    text-decoration: none;
    font-weight: 500;
    margin-bottom: -32px;
}

.subtitle {
    margin-left: 25rem;
    margin-bottom: 2rem;
    letter-spacing: 0.5em;
    word-spacing: 0.7em;
}

.category {
    font-weight: 400;
}
</style>