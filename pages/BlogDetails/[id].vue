<template>
  <div id="blogDetails" class="flex flex-row justify-center my-9 mx-7">

    <!-- .............................main posts.......................... -->
    <div class="main basis-3/4">
      <div class="flex flex-row justify-center" v-if="item">
        <div class="allPosts my-9">
          <div class="mainImage justify-center my-9">
            <img class="mx-auto" :src="item[0].image" alt="" srcset="" />
          </div>
          <div class="date text-center text-slate-400 text-sm">
            {{store.getBlogDate(item[0].date)}}
          </div>
          <div class="title text-center text-xl my-4 capitalize">{{ item[0].title }}</div>
          <div class="
              tags
              flex flex-row
              justify-center
              my-9
              text-slate-400 text-lg
            ">
            <div class="tag mx-2 text-sm" v-for="tag in item[0].tags" :key="tag">#{{ tag }}</div>
          </div>
          
          <div class="description my-9 text-slate-500 leading-9" v-html="item[0].description">

          </div>

          <div class="like">
            <i class="fa-regular fa-thumbs-up fa-xl cursor-pointer" v-if="!liked" @click="addLike"></i>
            <i class="fa-solid fa-thumbs-up fa-xl cursor-pointer" v-else @click="removeLike"></i>
            <span>{{item[0].likes}}</span>
          </div>

          <div class="allComments my-7">
            <p class="text-red-800 text-lg">Comments</p>
            <div v-for="comment in item[0].comments" :key="comment">
              <p>{{comment}}</p>
            </div>
          </div>

          <div class="comment my-5">
            <button class="border-2 px-5 py-2" @click="showCommentBox = !showCommentBox">{{showCommentBox?'Hide commentbox':'Leave a comment'}}</button>
            <div class="commentBox" v-if="showCommentBox">
              <textarea name="" id="" cols="60" rows="10" class="border-2 p-5 my-4 capitalize block"
                placeholder="Add Comment" v-model="currentComment"></textarea>
              <button class="border rounded bg-slate-700 px-7 py-2 text-white" @click="addComment">Submit</button>

            </div>
          </div>

        </div>
      </div>

    </div>

    <!-- ..................sidebar............................ -->

  </div>
</template>

<script>
import { ref, computed } from 'vue'
import store from '~/store'
export default {
  props: {

  },
  data() {
    return {
      item: null,
      store: store,
      currentComment: '',
      liked: false,
      showCommentBox: false,
    }
  },
  methods: {
    async addComment() {
      this.item[0].comments.push(this.currentComment)
      const bodyToUpdate = {
        comments: this.item[0].comments
      }
      await store.updatePost({ comments: this.item[0].comments }, this.item[0]._id)
      this.comment = '';
      this.showCommentBox = false;
    },

    async addLike() {
      this.liked = true;
      this.item[0].likes++
      await store.updatePost({ likes: this.item[0].likes }, this.item[0]._id)

    },
    async removeLike() {
      this.liked = false;
      this.item[0].likes--
      await store.updatePost({ likes: this.item[0].likes }, this.item[0]._id)

    }

  },
  async mounted() {
    await store.setCurrentBlog(this.$route.params.id)
    this.item = store.getCurrentBlog();
    if (window.scrollY != 0) {
      window.scrollTo({ top: 0 })
    }


  }
}
</script>

<style scoped>

</style>
