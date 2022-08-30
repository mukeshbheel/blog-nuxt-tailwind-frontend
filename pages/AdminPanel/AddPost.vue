<template>
  <div class="mx-9">
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            for="title"
            class="
              block
              mb-2
              text-sm
              font-medium
              text-gray-900
              dark:text-gray-300
            "
            >Title</label
          >
          <input
            type="text"
            id="title"
            class="
              bg-gray-50
              border border-gray-300
              text-gray-900 text-sm
              rounded-lg
              focus:ring-blue-500 focus:border-blue-500
              block
              w-full
              p-2.5
              dark:bg-gray-700
              dark:border-gray-600
              dark:placeholder-gray-400
              dark:text-white
              dark:focus:ring-blue-500
              dark:focus:border-blue-500
            "
            placeholder="Blog Title"
            required=""
            v-model="title"
          />
        </div>

        <div>
          <label
            for="blogImage"
            class="
              block
              mb-2
              text-sm
              font-medium
              text-gray-900
              dark:text-gray-300
            "
            >Image</label
          >
          <input
            type="text"
            id="blogImage"
            class="
              bg-gray-50
              border border-gray-300
              text-gray-900 text-sm
              rounded-lg
              focus:ring-blue-500 focus:border-blue-500
              block
              w-full
              p-2.5
              dark:bg-gray-700
              dark:border-gray-600
              dark:placeholder-gray-400
              dark:text-white
              dark:focus:ring-blue-500
              dark:focus:border-blue-500
            "
            placeholder="Blog Image"
            required=""
            v-model="image"
          />
        </div>

        
<div>
    <label for="category">Category:</label>
  <select name="category" id="category" v-model="category" >
    <option value="general">general</option>
    <option value="sidebarPost">sidebarPost</option>
    <option value="footerPost">footerPost</option>
  </select>
</div>


        <div>
          <label
            for="message"
            class="
              block
              mb-2
              text-sm
              font-medium
              text-gray-900
              dark:text-gray-400
            "
            >Description</label
          >
          <textarea
            id="message"
            rows="4"
            class="
              block
              p-2.5
              w-full
              text-sm text-gray-900
              bg-gray-50
              rounded-lg
              border border-gray-300
              focus:ring-blue-500 focus:border-blue-500
              dark:bg-gray-700
              dark:border-gray-600
              dark:placeholder-gray-400
              dark:text-white
              dark:focus:ring-blue-500
              dark:focus:border-blue-500
            "
            placeholder="Blog Description..."
            v-model="description"
          ></textarea>
        </div>

        <div>
          <label
            for="title"
            class="
              block
              mb-2
              text-sm
              font-medium
              text-gray-900
              dark:text-gray-300
              flex
            "
            >Tags</label
          >
          <input
            type="text"
            id="title"
            class="
              bg-gray-50
              border border-gray-300
              text-gray-900 text-sm
              rounded-lg
              focus:ring-blue-500 focus:border-blue-500
              block
              w-full
              p-2.5
              dark:bg-gray-700
              dark:border-gray-600
              dark:placeholder-gray-400
              dark:text-white
              dark:focus:ring-blue-500
              dark:focus:border-blue-500
            "
            placeholder="Add tags"
            required=""
            @keyup.enter="addTag"
            v-model="tag"
          />
          <div class="flex">
            <div class=" border border-black px-3 py-1 rounded flex my-3 mr-1" v-for="tag,i in tags" :key="tag">
              <p>{{tag}}</p>
             <img src="~/assets/icons/cross.png" class="ml-1 w-3 h-3 mt-2" alt="" @click="removeTag(i)">
          </div>
          </div>
          
        </div>
      </div>

      <button
        type="submit"
        class="
          text-white
          bg-blue-700
          hover:bg-blue-800
          focus:ring-4 focus:outline-none focus:ring-blue-300
          font-medium
          rounded-lg
          text-sm
          w-full
          sm:w-auto
          px-5
          py-2.5
          text-center
          dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
        "
        @click="addPost"
      >
        Submit
      </button>
  </div>
</template>

<script>
import {ref} from 'vue'
import store from '../../store.js'
export default {
    setup() {
        const title= ref('')
        const category = ref('')
        const image = ref('')
        const description = ref('')
        const tag = ref('')
        const tags = ref([])
        const router = useRouter()

        const addTag = () => {
            console.log('hello')
            console.log(tag.value)
            if(tag.value != ''){
                tags.value.push(tag.value)
                tag.value = ''
            }
        }

        const removeTag = (index) => {
            console.log(index)
            tags.value.splice(index, 1)
        }

        const addPost = () => {
            if(title != '' && category != '' && image != '' && description != '' && tags.value.length > 0){
                const blog = {
        "image": image.value,
        "title": title.value,
        "category": category.value,
        "tags": tags.value,
        "description": description.value
      }
                store.addPost(blog)
                router.push('/AdminPanel/Dashboard')
            }
        }

        return {
            tag,
            tags,
            addTag,
            removeTag,
            title,
            category,
            image,
            description,
            addPost,
        }
    },
}
</script>