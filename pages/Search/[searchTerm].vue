<template>
    <div>
        <p class="capitalize text-center text-xl text-slate-300">search results for {{$route.params.searchTerm}}</p>
        <TestAllPosts :data="getData" v-if="data" />
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import store from '../../store'
const data = ref(null)
const route = useRoute()
const getData = computed(() => data.value)

onMounted(async () => {
    console.log(route.params.searchTerm)
    console.log(await store.getSearchResult(route.params.searchTerm))
    data.value = await store.getSearchResult(route.params.searchTerm)
})
</script>
