<template>
    <div class="main basis-3/4" v-if="allPostsData">
      <div class="flex flex-row justify-center" v-for="item in allPostsData" :key="item._id">
        <div class="allPosts my-9">
          <div class="date text-center text-slate-400 text-lg">
            {{item.date}}
          </div>
          <div class="title text-center">{{  item.title }}</div>
          <div
            class="
              tags
              flex flex-row
              justify-center
              my-9
              text-slate-400 text-lg
            "
          >
            <div class="tag mx-2" v-for="tag in item.tags" :key="tag">#{{ tag }}</div>
          </div>
          <div class="mainImage justify-center">
            <img
              class="mx-auto"
              :src="item.image"
              alt=""
              srcset=""
            />
          </div>
          <div class="description my-9 text-slate-500 leading-9">
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
</template>