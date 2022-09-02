<template>
    <div class="sm:flex flex-wrap">
        <div class="card basis-1/4 flex-1 mx-3 mb-9 max-w-xs" v-for="post,i in allPosts" :key="post._id">
            <img :src="post.image" alt="">
            <p class="title my-3 text-slate-900">{{post.title}}</p>
            <p class="my-1">{{post.category}}</p>
            <div class="tags flex flex-wrap">
                <p class="mr-3 text-slate-400" v-for="tag in post.tags" :key="tag">#{{tag}}</p>
            </div>
            <div class="flex">
                <button class="update border-2 px-2 py-1 my-2 mr-1 text-sm bg-slate-600 text-gray-200" @click="$emit('updatePost', post)">Update</button>
                <button class="delete border-2 px-2 py-1 my-2 mr-1 text-sm bg-red-800 text-gray-200" @click="deletePost(post._id, i)" v-if="post.category != 'footerPost'">Delete</button>
                <!-- <button class="delete border-2">Delete</button> -->
            </div>

        </div>
    </div>
</template>

<script>
import {ref, onMounted, computed, watchEffect} from 'vue';
import store from '../../store'
export default {
    props:{
        category: {
            type: String,
            default:null
        }
    },
    setup(props) {
        const allPosts = ref(null)

        const all = async()=>{
            if(props.category == null){
                allPosts.value = await store.getAllPosts()
            }else{
                allPosts.value = await store.setPosts(props.category)
            }
            
        }
        
        const deletePost = async(id, i) => {
            await store.deletePost(id)
            allPosts.value.splice(i, 1)
        }

        watchEffect(() => all(props.category))

        

        return {
            allPosts,
            all,
            deletePost,
        }
    },
}
</script>