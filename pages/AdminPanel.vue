<template>
<div class="flex flex-row border p-3 ">
    <div class="category basis-1/5 text-slate-100 capitalize bg-black">
        <ul class="p-5">
            <li class="my-3" :class="$route.path == '/AdminPanel/Dashboard'? 'text-blue-500':''"><nuxt-link to="/AdminPanel/Dashboard" >dashboard</nuxt-link></li>
            <li class="my-3" :class="$route.path == '/AdminPanel/AddPost'? 'text-blue-500':''"><nuxt-link to="/AdminPanel/AddPost" >addPost</nuxt-link></li>
            <li class="my-3">Category</li>
            <ul>
                <li class="my-3 text-xs ml-3 " :class="$route.path == '/AdminPanel/Dashboard' && category == null? 'text-blue-500 border-b-2':''"><button @click="showCategory(null)" >All</button></li>
                <li class="my-3 text-xs ml-3" :class="$route.path == '/AdminPanel/Dashboard' && category == 'general'? 'text-blue-500 border-b-2':''"><button @click="showCategory('general')" >General</button></li>
                <li class="my-3 text-xs ml-3" :class="$route.path == '/AdminPanel/Dashboard' && category == 'featured'? 'text-blue-500 border-b-2':''"><button @click="showCategory('featured')" >Featured</button></li>
                <li class="my-3 text-xs ml-3" :class="$route.path == '/AdminPanel/Dashboard' && category == 'sidebarPost'? 'text-blue-500 border-b-2':''"><button @click="showCategory('sidebarPost')" >Sidebar Posts</button></li>
                <li class="my-3 text-xs ml-3" :class="$route.path == '/AdminPanel/Dashboard' && category == 'footerPost'? 'text-blue-500 border-b-2':''"><button @click="showCategory('footerPost')">Footer Posts</button></li>
            </ul>
        </ul>
    </div>
    <div class="show basis-4/5">
        <nuxt-page :category="category" :updateBlog="updateBlog" @updatePost="setUpdateBlog" />
    </div>
</div>
    
</template>

<script>
import {ref} from 'vue'
export default {
    setup() {
        const category = ref(null)
        const updateBlog = ref(null)
        const router = useRouter();

        const showCategory = (cat) => {
            console.log(cat)
            category.value = cat;
            router.push(`/AdminPanel/Dashboard`)
        }

        const setUpdateBlog = (event) => {
            // console.log(event)
            updateBlog.value = event;
            router.push('/AdminPanel/UpdatePost')
        }
        
        return {
            category,
            showCategory,
            updateBlog,
            setUpdateBlog,
        }
    },
}
</script>