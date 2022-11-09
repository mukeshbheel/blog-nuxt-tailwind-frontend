<template>
  <div class="mb-7">
    <div class="topBar sm:flex flex-row uppercase mx-7 pt-5 text-gray-400 tracking-wide">
      <p class="sm:block hidden basis-1/4 text-xs pt-1">Hello World, My name is Your Name</p>
      <p class="sm:block hidden basis-1/4 text-xs pt-1">YourEmail@gmail.com</p>
      <ul class="basis-1/4 flex flex-row justify-center">
        <li class="basis-1/6"><a href="https://www.instagram.com/?hl=en" target="_blank"><img class="w-5"
              src="../assets/icons/instagram.png" alt="" srcset=""></a></li>
        <li class="basis-1/6"><a href="https://www.facebook.com/" target="_blank"><img class="w-5"
              src="../assets/icons/facebook.png" alt="" srcset=""></a></li>
        <li class="basis-1/6"><a href="https://twitter.com/" target="_blank"><img class="w-5"
              src="../assets/icons/twitter.png" alt="" srcset=""></a></li>
        <li class="basis-1/6 text-xs">
          <!-- <nuxt-link href="/AdminPanel/Dashboard">Admin Panel</nuxt-link> -->
        </li>
      </ul>
      <div class="search basis-1/4">
        <input class="bg-slate-100 p-1" type="text" placeholder="search" v-model="searchTerm" @keyup.enter="search" />
        <button type="submit" @click="search">Search</button>
      </div>
    </div>
    <div class="mainHead mb-14">
      <div class="logo mx-auto text-center">
        <NuxtLink to="/">Name</NuxtLink>
      </div>
      <div class="subtitle text-center uppercase text-slate-400 text-xs ml-7">personal blog</div>
      <div class="navbar flex flex-row justify-center">
        <ul class="sm:flex flex-row uppercase sm:basis-2/5 text-sm">
          <li class="category basis-1/4 text-center cursor-pointer">
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li class="category basis-1/4 text-center cursor-pointer" @click="$router.push('/Featured')">featured</li>
          <li class="category basis-1/4 text-center cursor-pointer" @click="$router.push('/about')">about me</li>
          <li class="category basis-1/4 text-center cursor-pointer">contact</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { getIconsUrl } from '../helper/get_icon'
export default {
  setup() {
    const router = useRouter()
    const searchTerm = ref('')
    const getIcon = getIconsUrl;

    const search = () => {
      const saveTerm = searchTerm.value
      searchTerm.value = ''
      if (saveTerm != '') {
        router.push(`/search/${saveTerm}`)
      }

    }

    return { getIcon, search, searchTerm }
  },
}
</script>

<style scoped>
.topBar {
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
  /* margin-left: 25rem; */
  margin-bottom: 2rem;
  letter-spacing: 0.5em;
  word-spacing: 0.7em;
}

.category {
  font-weight: 400;
}
</style>